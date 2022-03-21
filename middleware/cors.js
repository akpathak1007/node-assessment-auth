module.exports = (req, res, next) => {
  res.setHeaders('Access-Control-Allow-Origin', '*')
  next();
}