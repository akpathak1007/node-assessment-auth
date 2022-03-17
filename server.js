const { log } = require('console');
const mongoose = require('mongoose');

const app = require('./app');
const { dotenv } = require('./utils/helper');

/* Configuring Env veriables */
dotenv();
const { PORT, DB_URL } = process.env;

mongoose.connect(DB_URL, {
  autoIndex: true,
  autoCreate: true,
  dbName:'assessment'
})


app.listen(PORT, () => {
  log(`server is running on http://127.0.0.1:8000`);
});

