const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
    //   const filename = req.file.filename;
    //   const filePath = `uploads/${filename}`;
    //   fs.unlink(filePath, (err) => {
    //     if (err) {
    //       console.log(err);
    //       res.status(500).json({ message: "Error deleting file" });
    //     }
    //   });
      return next(new ErrorHandler("User already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };
    console.log(user);
})

module.exports = router;