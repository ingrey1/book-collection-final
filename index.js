const app = require("./app");
const db = require("./models");

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(
      `You've successfully connected to the Book Collection database`
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });
};

start();
