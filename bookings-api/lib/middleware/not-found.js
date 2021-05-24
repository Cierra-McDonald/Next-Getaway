// eslint-disable-next-line no-unused-vars
module.exports = (req, res, next) => {
  const err = new Error('Not Found');

  console.log(err);

  err.status = 404;
  
  next(err);
};
