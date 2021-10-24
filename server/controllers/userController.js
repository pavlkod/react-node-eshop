class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    res.json(req.query);
  }
}

module.exports = new UserController();
