class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    res.json({ message: 123 });
  }
}

module.exports = new UserController();
