const pastesRouter = require("../pastes/pastes.router");

const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.use("/:userId/pastes", controller.userExists, pastesRouter);

router.use("/:userId/pastes", pastesRouter);

router.route("/:userId").get(controller.read).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
