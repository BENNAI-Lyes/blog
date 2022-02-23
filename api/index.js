const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const multer = require("multer");

const authRouts = require("./route/auth");
const userRouts = require("./route/user");
const postRouts = require("./route/post");
const categoryRouts = require("./route/category");

dotenv.config();
app.use(express.json());

app.use(express.static(path.join(__dirname, "assets/images")));

app.use(morgan("common"));
app.use(helmet());

//connect to mongodb

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("can not connect to DB", err);
  });

app.use("/api/auth", authRouts);
app.use("/api/user", userRouts);
app.use("/api/post", postRouts);
app.use("/api/category", categoryRouts);

// upload images to the server

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, "assets/images");
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json("file uploaded");
  } catch (error) {
    res.status(500).json(error);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
