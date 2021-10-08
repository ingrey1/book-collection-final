const express = require("express");
const booksRouter = require("./routes/books.route");
const { errorHandler } = require("./utils/errors")

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/books", booksRouter);

app.use(errorHandler);

module.exports = app;
