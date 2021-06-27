const { Device, Vehicle } = require('../models');

module.exports = io => {
  io.on('connection', socket => {
    socket.on('join', async deviceId => {
      logger.info('client joined!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! deviceId : ' + deviceId)
      try {
        const device = await Device.findOne({ attributes: ['id'], where: { id: deviceId } });
        if (!device) {
          socket.emit('error', { error: new Error('Device identity not found') });
          return;
        }
        socket.join(deviceId);
      } catch (err) {
        logger.error('Server error', err.stack || err);
      }
    });

    socket.on('message', async message => {
      try {
        const { deviceId, metadata } = JSON.parse(message);
        const { count, time } = metadata;
        const device = await Device.findOne({ attributes: ['id'], where: { id: deviceId } });
        if (!device) {
          io.emit('error', { error: new Error('Device identity not found') });
          return;
        }

        await Vehicle.create({
          deviceId: device.id,
          count,
          time: new Date(time * 1000),
        });

        io.to(deviceId).emit(deviceId, JSON.stringify(message));
      } catch (err) {
        logger.error('Server error', err.stack || err);
      }
    });
  });
};
