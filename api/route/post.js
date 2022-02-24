const router = require("express").Router();

const Post = require("../model/Post");

//create a post
router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    const savedPost = await post.save();
    return res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//update a post
router.put("/:id", async (req, res) => {
  try {
    // get the post
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("post not found");

    if (post.username === req.body.username) {
      const updatedPost = await post.update({ $set: req.body }, { new: true });
      return res.status(200).json(updatedPost);
    }

    return res.status(403).json("you can update only your post");
  } catch (error) {
    return res.status(500).json(error);
  }
});

//delete a post
router.delete("/:id", async (req, res) => {
  try {
    // get the post
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("post not found");

    if (post.username === req.body.username) {
      const deletedPost = await post.delete();
      return res.status(200).json(deletedPost);
    }

    return res.status(403).json("you can delete only your post");
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get a post
router.get("/:id", async (req, res) => {
  try {
    // get the post
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("post not found");

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get all a post
router.get("/", async (req, res) => {
  try {
    const username = req.query.username;
    const category = req.query.category;
    let posts = [];

    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({ category: { $in: category } });
    } else {
      posts = await Post.find();
    }
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
