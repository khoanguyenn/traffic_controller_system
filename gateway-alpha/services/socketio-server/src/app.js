const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

require('./global');
const { sequelize } = require('./models');

const config = require('./config');

// express
const app = express();
app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"] } } }));
app.use(cors());

sequelize.sync()
  .then(() => {
    logger.info('connected to DB');
  })
  .catch(error => {
    logger.error('DB connection failed.', error);
  });

if (process.env.NODE_ENV !== 'dev') {
  const skipUrls = ['/healthcheck/', '/healthcheck'];
  const morganOptions = { skip: req => skipUrls.includes(req.url) };
  app.use(morgan(config.morganLogFormat, morganOptions));
  // app.use(morgan('combined', morganOptions));
} else {
  app.use(morgan('dev'));
}

app.use(express.json());

app.enable('trust proxy');

module.exports = app;
