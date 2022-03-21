const express = require('express');
const { ValidationError } = require('express-validation');
const cors = require('cors');

const userRouter = require('./routes/user-routes');
const morgan = require('morgan');


const app = express();
/* Global middleware */
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
  origin: '*'
}))
app.use('/api/v1/user', userRouter);

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(500).json(err);
  }
})

module.exports = app;