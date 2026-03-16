const express = require("express");

//internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Userss"), getUsers);

// add user
router.post(
  "/",
  avatarUpload,
//   addUserValidators,
//   addUserValidationHandler,
//   addUser
);

module.exports = router;