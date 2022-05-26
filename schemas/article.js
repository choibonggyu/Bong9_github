// const autoIdSetter = require('./auto-id-setter');
const mongoose = require("mongoose");



const articleSchema = mongoose.Schema(
    {
        // articleId: {
        //     type: Number,
        //     required: true,
        //     unique: true,
        // },
        articleId: {
            type:String,
            required: true,
        },
        name: {
            type:String,
            required: true,
        },
        articlePw: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        title: {
            type:String,
            required:true,
        },
        content : {
            type:String,
            required: true
        }
    },
    { timestamps: true }
);
// POST 요청이 들어올 시 articles 콜렉션에 articleId 가 자동 증가한 값을 추가한다 
// autoIdSetter(blogSchema, mongoose, 'article', 'articleId'); 
module.exports = mongoose.model("Articles", articleSchema);