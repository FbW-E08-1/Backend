import express from "express";
import {
  createPost,
  getPosts,
  deletePost,
  updatePost,
} from "../controllers/postControllers.js";
const router = express.Router();

//GET request
//http:localhost:5000/posts
router.get("/", getPosts);

//POSt request
router.post("/", createPost);

//DELETE
router.delete("/:id", deletePost);

// UPDATE
router.put("/:id", updatePost);
export default router;
