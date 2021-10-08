const { Joi } = require("express-validation");

const booksValidation = {
  getAll: {
    query: Joi.object({
      id: Joi.number().integer(),
      title: Joi.string(),
      about: Joi.string(),
    }),
  },
  create: {
    body: Joi.object({
      title: Joi.string().min(2).max(255).required(),
      about: Joi.string().min(2).max(2550).required(),
    }),
  },
};

module.exports = { booksValidation };
