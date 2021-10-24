const Router = require("express");
const router = new Router();
const controller = require("../controllers/typeController");

router.get("/", controller.getAll);
router.post("/", controller.create);

module.exports = router;
