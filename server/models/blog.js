import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true 
    },
    content: { 
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category:{
      type: String,
      enum: ['Engineering', 'Medical', 'Development', 'Marketing', 'Science' , 'Designer'],
      required:true,
    },
    imageUrl: { 
      type: String,
      required: true 
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("BlogModel", blogSchema);
export default Blog;
