const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");
class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let filename = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", filename));

      const device = await Device.create({ name, price, brandId, typeId, img: filename });
      if (info) {
        info = JSON.parse(info);
        info.forEach(i => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { brandId, typeId, limit = 10, page = 1 } = req.query;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset });
    }
    return res.json(devices);
  }
  async get(req, res) {}
}

module.exports = new DeviceController();
