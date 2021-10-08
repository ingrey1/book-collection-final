const { Joi } = require("express-validation");

const booksValidation = {
  getAll: {
    query: Joi.object().keys({
      id: Joi.number().integer(),
      title: Joi.string(),
      about: Joi.string(),
    }).unknown(false),
  },
  create: {
    body: Joi.object().keys({
      title: Joi.string().min(2).max(255).required(),
      about: Joi.string().min(2).max(2550).required(),
    }).unknown(false),
  },
};

module.exports = { booksValidation };
