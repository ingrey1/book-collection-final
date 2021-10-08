const Router = require("express");
const { validate } = require("express-validation");
const BooksController = require("../controllers/books.controller");
const {
  booksValidation,
  options,
} = require("../validations/books.validations");

console.info("BooksController: ", BooksController);

const booksRouter = Router();

booksRouter.get(
  "/",
  validate(booksValidation.getAll, options),
  BooksController.getAll
);

booksRouter.post(
  "/",
  validate(booksValidation.create, options),
  BooksController.create
);

module.exports = booksRouter;
