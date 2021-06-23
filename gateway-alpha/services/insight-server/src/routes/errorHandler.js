function catchApiError(app) {
  app.use((err, req, res, next) => {
    logger.error('API error', { error: err.stack || err });

    res.status(500).send({
      isSuccess: false,
      error: err.message,
    });
    if (next) {
      next();
    }
  });
}

module.exports = catchApiError;
