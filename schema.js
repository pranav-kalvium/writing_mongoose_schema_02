const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    username :{
        type :String,
        required : true,
    },
    message :{
        type : String,
        required : true,
    },
    commentedAt : {
        type : Date ,
        default : Date.now 
    },
})

const blogSchema = new Schema ({
    title :{
        type : String ,
        required : true ,
        unique : true ,
        minlength : 5 ,
    },
    content :{
        type : String ,
        required : true ,
        minlength : 50 ,
    },
    author :{
        type : String ,
    },
    tags : {
        type : [String] ,
        default : [] ,
    },
    category : {
        type : String ,
        default : 'General'
    },
    likes: {
    type: [String],
    },
    comments: [commentSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
