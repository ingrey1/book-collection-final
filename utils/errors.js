const { ValidationError } = require("express-validation");

const errorHandler = function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.json(err);
};

module.exports = { errorHandler };
