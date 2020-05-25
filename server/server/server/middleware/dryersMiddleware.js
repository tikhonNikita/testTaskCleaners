function dryersElementValid(element) {
  if (element !== null && element !== undefined && element !== '') {
    return true;
  }
  return false;
}

module.exports = {
  dryersCreateValidation(req, res, next) {
    console.log('body', req.body.name);
    const { name } = req.body;

    if ((dryersElementValid(name))
    ) {
      next();
    } else {
      res.status(400).send('Invalid data');
    }
  },

};
