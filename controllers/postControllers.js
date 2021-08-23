

//Dependencies
const Post = require('../models/Post');


//controller get post
exports.getPost = async (req, res, next) => {
    const postId = req.params.id;
    try {
        const post = await Post.findOne({_id: postId}); 
        res.status(200).send(post);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

//controller get all post
exports.getAllPost = async (req, res, next) => {
    try {
        const posts = await Post.find(); 
        res.status(200).send(posts);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

//controller create new post
exports.addPost = async (req, res, next) => {
    try{
        const newPost = {
            text: req.body.text,
            name: req.user.name,
            avatar: req.user.avatar,
            user: req.user._id
        }
        const post = new Post(newPost);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

//controller put like
exports.putLike = async (req, res, next) => {
    const postId = req.params.id;
    try{
        const post = await Post.findOne({_id: postId});
        const liked = post.likes.filter(lk => lk.user.toString() == req.user._id.toString());
        if(liked.length > 0){
            return res.status(400).send({message:'liked'});
        }
        post.likes.unshift({ user: req.user._id});
        await post.save();
        res.status(200).send(post);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

//controller delete post
exports.deletePost = async (req, res, next) => {
    const postId = req.params.id;
    try {
        const post = await Post.findOneAndRemove({_id: postId}); 
        res.status(200).send(post);
    } catch (error) {
        res.status(404).send(error.message);
    }
}