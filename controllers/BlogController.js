import BlogModel from "../models/BlogModel.js";

//methods for the CRUD  operations

//show all records
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.json(   { message: error.message }   );
    }
}

//show a record by id

export const getBlog = async (req, res) => {
    try {
      const blog = await BlogModel.findAll({
        where: { id:req.params.id }
       });
       res.json(blog[0]);
    } catch (error) {
        res.json(   { message: error.message } );
    }
}


//create a record

export const createBlog = async (req, res ) => {
    try {
        await BlogModel.create(req, body)
        res.json({
            "message": "Blog created"
        })
    } catch (error) {
        res.json( { message: error.message } );
    }
}

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req, body, {
            where:{ id: req.params.id}
        });
    } catch (error) {
        res.json( { message: error.message } );
    }
}



// delete register

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where:{ id: req.params.id}
        });
    } catch (error) {
        res.json( { message: error.message } );
    }
}