const mongoose = require('mongoose');

const Post = require('./models/post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', { useNewUrlParser: true, useUnifiedTopology: true });


// Post.find({
// }, (error, post) => {
//     console.log(error, post)
// })

// Post.findById(
//     '6130f1a992422b2666f9e475'
// , (error, post) => {
//     console.log(error, post)
// })

// Post.findByIdAndUpdate('6130f1a992422b2666f9e475', {
//     title: 'Beniö 2. Postum'
// }, (error,post)=>{
//     console.log(error, post);
// })


Post.findOneAndDelete('6130f1a992422b2666f9e475', (error, post)=>{
    console.log(error, post);
})

// Post.create({
//     title: 'İKİNİ Post Başlığım',
//     content : 'İKİNCİ Post içeriği, lorem ipsum test'
// }, (error, post)=>{
//     console.log(error, post);
// })
