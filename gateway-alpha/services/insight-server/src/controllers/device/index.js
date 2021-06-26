const _ = require('lodash');
const config = require('../../config');
const { Device } = require('../../models');

async function listDevice(req, res, next) {
  try {
    const devices = await Device.findAll({
      attributes: ['id', 'name'],
      raw: true,
    });

    res.send({
      isSuccess: true,
      devices: _.map(devices, x => ({ id: x.id, name: x.name })),
    });
  } catch (err) {
    next(err);
  }
}

async function getDevice(req, res, next) {
  try {
    const { deviceId } = req.query;
    const device = await Device.findOne({
      attributes: ['id', 'name'],
      where: { id: deviceId },
      raw: true,
    });

    res.send({
      isSuccess: true,
      device: {
        id: device.id,
        name: device.name,
        // url: `rtmp://${config.rtmp.host}:${config.rtmp.port}/live/${device.id}`,
        url: `https://streaming.www.zdobyc.xyz/live/${deviceId}.m3u8`
      },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listDevice,
  getDevice,
};
