import PostMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
  try {
    const result = await PostMessage.find();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  try {
    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ msg: "No post with this id!" });
    }
    await PostMessage.findByIdAndRemove(req.params.id);
    res.status(201).json({ msg: "Post deleted!!" });
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};
