const express = require("express");
const router = express.Router();
const { register, logInUser, logoutUser } = require("../Controllers/userController.js");
const {
  submitText,
  searchText,
  clearCookies,
} = require("../Controllers/textController.js");

router.post("/register", register);
router.post("/login", logInUser);
// router.post("/logout", logoutUser);

router.post("/submit_cookies", submitText);
router.get("/search_cookies", searchText);
router.post("/clear_cookies", clearCookies);

module.exports = router;
