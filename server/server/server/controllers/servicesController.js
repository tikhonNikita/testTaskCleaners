const jwt = require('jsonwebtoken');
const { Services } = require('../models');

module.exports = {

  async createService(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      if (decoded.admin) {
        const service = await Services.create({
          name: req.body.name,
          price: req.body.price,
          dryerId: req.body.dryerId,
        });

        res.status(200).json(service);
      } else {
        res.status(400).json('Permission denied');
      }
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  async updateService(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      if (decoded.admin) {
        const { id } = req.body;
        const updateNode = req.body;
        updateNode.updatedAt = '';

        await Services.update(updateNode, {
          where: {
            id,
          },
        });

        res.status(200).json(await Services.findOne({
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

  async deleteService(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      if (decoded.admin) {
        const { id } = req.body;

        const deletedService = await Services.findOne({
          where: {
            id,
          },
        });

        await Services.destroy({
          where: {
            id,
          },
        });
        res.status(200).json(deletedService);
      } else {
        res.status(400).json('Permission denied');
      }
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  async getAllServices(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      const service = await Services.findAll({});
      res.status(200).send(service);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },

  async getAllServicesOfDryers(req, res) {
    try {
      const { dryerId } = req.params;

      const services = await Services.findAll({
        where: {
          dryerId,
        },
      });
      res.status(200).json(services);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },

};
