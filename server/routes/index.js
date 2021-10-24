const Router = require("express");
const router = new Router();

const userRouter = require("./user");
const brandRouter = require("./brand");
const deviceRouter = require("./device");
const typeRouter = require("./type");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

module.exports = router;
