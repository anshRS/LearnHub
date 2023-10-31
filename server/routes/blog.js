import express from "express";
import { protect } from "../middlewares/auth.js";
import {searchBlogs , postBlogs, getBlogs} from "../controllers/blog.js"
const Blogrouter = express.Router();

// BlogRoutes
Blogrouter.post("/blog-search" , protect , searchBlogs)
Blogrouter.post("/blog-post" , protect , postBlogs)
Blogrouter.get("/blog-get" , protect , getBlogs)

export {Blogrouter}