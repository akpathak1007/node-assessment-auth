module.exports = (req, res, next) => {
  log(req.headers);
  next();
}