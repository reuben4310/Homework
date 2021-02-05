module.exports = (req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()} - ${req.url}`);
  next();
};