const Router = require("express");
const router = new Router();
const controller = require("../controllers/typeController");
const checkMiddleware = require("../middleware/checkMiddleware");

router.get("/", controller.getAll);
router.post("/", checkMiddleware("ADMIN"), controller.create);

module.exports = router;
