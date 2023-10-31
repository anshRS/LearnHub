// import jwtDecode from 'jwt-decode'
// import {Blog} from "../models/blogs";

const searchBlogs = async (req, res)=>{
    try {
        const {text , field} = req.body ;
        //  Search Logic

        text = text.toLowerCase();
        const title_query = {title : text}
        const field_query = {field : field}
        const title_blogs = Blog.find(title_query).toArray();
        const field_blogs = Blog.find(field_query).toArray();
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

const postBlogs = async (req ,res)=>{
    try{
        const {} = req.body ;
        const newBlog = new Blog({

        });
        await newBlog.save();
        res.status(200).json({message : "Successfully Saved !!"});
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }

};

const getBlogs = async (req , res)=>{
    try{
        const {_id} = req.body ;
        const blog = Blog.findOne({_id});
        if(!blog){
            res.status(400).json({message : "Blog can't be found"});
        }
        res.status(200).json({blog})

    }
    catch(error){
        res.status(500).json({error : err.message})
    }
}

export { searchBlogs  , postBlogs , getBlogs}