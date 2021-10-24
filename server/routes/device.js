const Router = require("express");
const router = new Router();
const controller = require("../controllers/deviceController");

router.get("/", controller.getAll);
router.get("/:id", controller.get);
router.post("/", controller.create);

module.exports = router;
