const db = require("../models");

const Books = db["Books"];

class BooksController {
  static async create(req, res) {
    try {
      const { title, about } = req.body;
      const newBook = await Books.create({ title, about });
      const response = {
        statusCode: 201,
        data: newBook,
      };
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }

  static async getAll(req, res) {
    try {
      const filters = { ...req.query };
      const allBooks = await Books.findAll(filters);
      const response = {
        statusCode: 201,
        data: allBooks,
      };
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = BooksController;
