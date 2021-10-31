const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "Not valid token" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT);
    if (!decoded) {
      return res.status(403).json({ message: "Not valid token" });
    }
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "Not authorized" });
  }
};
