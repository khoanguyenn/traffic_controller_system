const deviceHandler = require('../controllers/device');

module.exports = app => {
  app.get('/api/device/list-devices', deviceHandler.listDevice);
  app.get('/api/device/get-device', deviceHandler.getDevice);
};
