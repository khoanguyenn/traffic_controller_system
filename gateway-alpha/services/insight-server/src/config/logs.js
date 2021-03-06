const path = require('path');

module.exports = {
  morganLogFormat: ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :response-time[0] ms - :res[content-length] ":user-agent"',
  logLocation: path.join(__dirname, '../../logs'),
};
