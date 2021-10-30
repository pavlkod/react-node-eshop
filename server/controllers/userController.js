const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJWT = (id, email, role) =>
  jwt.sign({ id: id, email, role }, process.env.SECRET_KEY_JWT, { expiresIn: "24h" });

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest("Empty email or password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("User already exists"));
    }
    const hashpwd = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashpwd, role });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJWT(user);
    return res.json({ token });
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest(`User with email ${email} not exists`));
    }
    let comparedPwd = bcrypt.compareSync(password, user.password);
    if (!comparedPwd) {
      return next(ApiError.badRequest(`Password not same`));
    }
    const token = generateJWT(user);
    return res.json({ token });
  }
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("No transfer parameter ID"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
