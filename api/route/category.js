const router = require("express").Router();

const Category = require("../model/Category");

//creat a category
router.post("/", async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get all category
router.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
