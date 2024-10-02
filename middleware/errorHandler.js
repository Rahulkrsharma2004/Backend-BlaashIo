module.exports = (err, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  };
  