import express from "express";
import { createPost, getPosts } from "../controllers/postControllers.js";
const router = express.Router();

//GET request
//http:localhost:5000/posts
router.get("/", getPosts);

//POSt request
router.post("/", createPost);

export default router;
