const express = require("express");
const booksRouter = require("./routes/books.route");


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/books", booksRouter);

module.exports = app
