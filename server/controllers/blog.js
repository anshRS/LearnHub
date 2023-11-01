import  BlogModel from "../models/blog.js";


export const searchBlogs = async (req, res)=>{
    try {
        const {text , field} = req.body ;
        //  Search Logic

        text = text.toLowerCase();
        const title_query = {title : text}
        const field_query = {field : field}
        const title_blogs = BlogModel.find(title_query).toArray();
        const field_blogs = BlogModel.find(field_query).toArray();
        if(!title_blogs){
            if(field_blogs){
                res.status(201).json({message:"Not blogs with given title" , blogs : field_blogs})
            }
            else{
                return res.status(200).json({mesage : "Not Found"});
            }
        }
        res.status(200).json({blogs : title_blogs });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

};

export const postBlog = async (req ,res,next)=>{
    try{
        const {title , content , author, category} = req.body ;
        const image = req.file;
        console.log({title , content , author, category,image})
        if(!title || !content || !author || !category || !image){
            return res.status(400).send({msg:"Please provide all fields"})
        }
        const newBlog = new BlogModel({
            title ,
            content ,
            author , 
            category,
            imageUrl: image.filename,
        });
        await newBlog.save();
        res.status(200).json({message : "Successfully Saved !!"});
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
};

export const getBlog = async (req , res)=>{
    try{
        const blogid =  req.params.id;

        const blog =await BlogModel.findById(blogid);
        if(!blog){
            res.status(400).json({message : "Blog not found"});
        }
        res.status(200).json({blog})
    }
    catch(error){
        res.status(500).json({error : err.message})
    }
}

export const getAllBlogs = async (req , res)=>{
    try{
        const blogs = await BlogModel.find();        

        res.status(200).json({
            msg:"Blogs fetched successfully",
            blogs
        })

    }
    catch(error){
        res.status(500).json({error : err.message})
    }
}

export const getBlogsByCategory = async (req,res) => {
    try{
        const blogCategory = req.params.category;
        const blogs = await BlogModel.find({category: blogCategory});
        res.status(200).json({
            msg:"Blogs fetched successfully",
            blogs
        })
    }catch(err){
        res.status(500).json({error:err})
    }
}

