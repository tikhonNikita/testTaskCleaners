const jwt = require('jsonwebtoken');
const { Orders } = require('../models');

module.exports = {

  async createOrder(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      const order = await Orders.create({
        date: req.body.date,
        userId: req.body.userId,
        dryerId: req.body.dryerId,
        serviceId: req.body.serviceId,
        price: req.body.price,
        status: req.body.status,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });

      res.status(200).json(order);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  async updateOrder(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      if (decoded.admin) {
        const { id } = req.body;
        const updateNode = req.body;
        updateNode.updatedAt = '';

        await Orders.update(updateNode, {
          where: {
            id,
          },
        });

        res.status(200).json(await Orders.findOne({
          where: {
            id,
          },
        }));
      } else {
        res.status(400).json('Permission denied');
      }
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  async deleteOrder(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      const { id } = req.body;

      const deletedService = await Orders.findOne({
        where: {
          id,
        },
      });

      await Orders.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(deletedService);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  async getAllOrders(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      if (!decoded.admin) {
        res.status(400).json('Permission denied');
      }
      const orders = await Orders.findAll({});
      res.status(200).send(orders);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },

  async getAllOrdersOfUser(req, res) {
    try {
      const { userId } = req.params;
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      const services = await Orders.findAll({
        where: {
          userId,
        },
      });
      res.status(200).json(services);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },


  async getOrderById(req, res) {
    try {
      const { orderId } = req.params;

      const tasks = await Orders.findAll({
        where: {
          id: orderId,
        },
      });
      res.status(200).json(tasks);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },

};
