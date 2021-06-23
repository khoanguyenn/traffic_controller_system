const app = require('./app');
const config = require('./config');

const server = app.listen(config.port, '0.0.0.0', () => {
  logger.info(`Running on port ${config.port}`);
});

process.on('uncaughtException', exception => {
  logger.warn(exception);
});

process.on('unhandledRejection', reason => {
  logger.warn(reason.stack || reason);
});

process.on('SIGINT', () => {
  logger.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown');
  shutdown();
});

process.on('SIGTERM', () => {
  logger.info('Got SIGTERM (docker container stop). Graceful shutdown');
  shutdown();
});

function shutdown() {
  server.close(error => {
    if (error) {
      logger.error('SHUTDOWN ERROR', error);
      process.exitCode = 1;
    }
    process.exit();
  });
}
