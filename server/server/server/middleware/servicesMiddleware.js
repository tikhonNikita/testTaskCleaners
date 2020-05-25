function serviceElementValid(element) {
  if (element !== null && element !== undefined && element !== '') {
    return true;
  }
  return false;
}

module.exports = {

  serviceCreateValidation(req, res, next) {
    const { name } = req.body;
    const { price } = req.body;

    if ((serviceElementValid(name))
            && (serviceElementValid(price))
    ) {
      next();
    } else {
      res.status(400).send('Invalid data');
    }
  },

  serviceUpdateValidation(req, res, next) {
    const { name } = req.body;
    const { price } = req.body;

    if (((name === undefined || serviceElementValid(name))
            && (price === undefined || serviceElementValid(price)))
    ) {
      next();
    } else {
      res.status(400).send('Invalid data');
    }
  },

};
