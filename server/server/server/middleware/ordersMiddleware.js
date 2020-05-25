function orderElementValid(element) {
  if (element !== null && element !== undefined && element !== '') {
    return true;
  }
  return false;
}

function orderElementStatusValid(element) {
  if (element !== null && element !== undefined && (element === 'New' || element === 'Ready' || element === 'Return')) {
    return true;
  }
  return false;
}

module.exports = {

  orderCreateValidation(req, res, next) {
    const {
      userId, dryerId, serviceId, price, status, firstName, lastName, date,
    } = req.body;

    if ((orderElementValid(userId))
        && (orderElementValid(dryerId))
        && (orderElementValid(serviceId))
        && (orderElementValid(price))
        && (orderElementStatusValid(status))
        && (orderElementValid(firstName))
        && (orderElementValid(lastName))
        && (orderElementValid(date))
    ) {
      next();
    } else {
      res.status(400).send('Invalid data');
    }
  },

  orderUpdateValidation(req, res, next) {
    const {
      id, price, status, firstName, lastName, date,
    } = req.body;

    if (((status === undefined || orderElementStatusValid(status))
            && (price === undefined || orderElementValid(price)))
        && (firstName === undefined || orderElementValid(firstName))
        && (lastName === undefined || orderElementValid(lastName))
  && (date === undefined || orderElementValid(date))
        && orderElementValid(id)
    ) {
      next();
    } else {
      res.status(400).send('Invalid data');
    }
  },

};
