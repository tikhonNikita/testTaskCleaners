const jwt = require('jsonwebtoken');
const fs = require('fs');
const { Dryers } = require('../models');


module.exports = {
  async createDryers(req, res) {
    try {
      const { token } = req.headers;
      const imagesPath = [];
      const decoded = jwt.verify(token, 'secret');
      if (decoded.admin) {
        const dryersData = req.files;
        if (req.files) {
          for (const dryer of dryersData) {
            imagesPath.push(dryer.path.replace('public', ''));
          }
        }
        const dryer = await Dryers.create({
          name: req.body.name,
          description: req.body.description,
          servicesDescription: req.body.servicesDescription,
          images: JSON.stringify(imagesPath),
        });

        res.status(200).json(dryer);
      } else {
        res.status(400).json('Permission denied');
      }
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },


  async deleteDryers(req, res) {
    try {
      const { token } = req.headers;
      const decoded = jwt.verify(token, 'secret');
      if (decoded.admin) {
        const { id } = req.body;

        const deletedDryers = await Dryers.findOne({
          where: {
            id,
          },
        });

        const dryers = JSON.parse(deletedDryers.images);
        if (dryers) {
          for (const dryer of dryers) {
            fs.unlink(`public${dryer}`, (err) => {
              if (err) {
                console.log(`failed to delete local image:${err}`);
              } else {
                console.log('successfully deleted local image');
              }
            });
          }
        }

        await Dryers.destroy({
          where: {
            id,
          },
        });
        res.status(200).json(deletedDryers);
      } else {
        res.status(400).json('Permission denied');
      }
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  async getAllDryers(req, res) {
    try {
      const { token } = req.headers;

      const decoded = jwt.verify(token, 'secret');
      const dryers = await Dryers.findAll({});

      if (dryers) {
        for (const dryer of dryers) {
          dryer.images = JSON.parse(dryer.images);
        }
      }
      res.status(200).send(dryers);
    } catch (e) {
      console.log(e);
      res.status(404).json(e);
    }
  },


};
