const express = require('express');
const multer = require('multer');
const { dryersController } = require('../controllers');

const routerDryers = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/uploads/images/');
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}.jpg`);
  },
});

const upload = multer({ storage });

routerDryers.get('/getDryers', dryersController.getAllDryers);

routerDryers.post('/createDryer', upload.array('file'), dryersController.createDryers);

routerDryers.delete('/deleteDryer', dryersController.deleteDryers);

module.exports = routerDryers;
