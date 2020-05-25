const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const redis = require('redis');
const { restoreMessage } = require('../templates/PasswordRestoreMessage');
const { User: UserController } = require('../models');

const clientAddress = 'http://localhost:3000';

module.exports = {

  async userAuthorization(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserController.findOne({
        where: {
          email,
        },
      });
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          const payload = {
            id: user.id,
            username: user.email,
            admin: user.isAdmin,
          };

          const secret = process.env.JWT_SECRET || 'secret';

          const token = jwt.sign(payload, secret, {
            expiresIn: '30d',
          });
          res.status(200).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            admin: user.isAdmin,
            token,
          });
        } else {
          res.status(400).json(`Incorrect password for user: ${email}`);
        }
      } else {
        res.status(400).json(`Incorrect username: ${email}`);
      }
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },

  async createUser(req, res) {
    try {
      const bcryptPassword = await bcrypt.hash(req.body.password, 10);
      const user = await UserController
        .create({
          email: req.body.email,
          password: bcryptPassword,
          isAdmin: req.body.admin,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        });
      res.status(200).json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },


  async sendEmailPasswordRestore(req, res) {
    try {
      const client = redis.createClient(6379, 'redis');

      const { email } = req.body;
      const user = await UserController.findOne({ where: { email } });
      if (!user) {
        res.status(400).json('Invalid email');
        return;
      }
      const restoreLink = `"${clientAddress}/api/resetPassword"`;
      const restoreCode = Math.ceil(Math.random() * 1000000);
      const emailJson = {
        email,
        message: restoreMessage(restoreLink, restoreCode),
      };
      const updateNode = { restoreCode };
      await client.set('emailJson', JSON.stringify(emailJson));
      await UserController.update(updateNode, {
        where: {
          id: user.id,
        },
      });
      const message = { message: `Message sent to : ${email}` };
      res.status(201).json(message);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  async passwordRestore(req, res) {
    try {
      if (req.body.restoreCode !== null) {
        console.log(req.restoreCode);
        const user = await UserController.findOne({ where: { restoreCode: req.body.restoreCode } });
        if (!user) {
          res.status(400).json('Invalid code');
        }
        const password = await bcrypt.hash(req.body.password, 10);
        const updateNode = { restoreCode: null, password };
        await UserController.update(updateNode, {
          where: {
            id: user.id,
          },
        });
        res.status(201).json(user);
      }
    } catch (e) {
      res.status(400).json(e);
    }
  },


  async deleteUser(req, res) {
    try {
      const { userId } = req.params;
      const deleteUser = await UserController.findAll({
        where: {
          id: userId,
        },
      });

      await UserController.destroy({
        where: {
          id: userId,
        },
      });
      res.status(200).json(deleteUser);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },

  async getAllUsers(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      if (decoded.admin) {
        const users = await UserController.findAll({});
        res.status(200).json(users);
      } else {
        res.status(400).json('Permission denied');
      }
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

};
