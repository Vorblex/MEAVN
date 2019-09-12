const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../config');
mongoose.Promise = global.Promise;

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));
app.use('/projects', require('./routes/projects'))

mongoose.connect(config.dbURL, config.dbOptions);

mongoose.connection.once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error));










///// Deprecated and unuseful //////

// const posts = require('./routes/posts');
// const router = express.Router();

// const Post = require('./models/post-model');
// app.use(express.urlencoded());

// app.post('/posts', (req, res) => {
//     const post = new Post({
//       title: req.body.title,
//       description: req.body.description
//     })
//     post.save((err, data) => {
//       if (err) {
//         console.log(err)
//       } else {
//         res.send({
//           success: true,
//           message: `Post with ID_${data._id} saved successfully!`
//         })
//       }
//     })
//   })

// app.get('/posts', (req, res) => {
//     Post.find({}, 'title description', (err, posts) => {
//         if (err) {
//         res.sendStatus(500)
//         } else {
//         res.send({ posts: posts })
//         }
//     }).sort({ _id: -1 })
// })

// app.get('/posts', (err, res) => {
//     res.send(
//         {
//             posts: [{
//                 "title": "Hello World!",
//                 description: "Hi Alex!",
//                 action: "https://medium.com/devschacht/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-mevn-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-2-9ad714260037"
//             }]
//         }
        
//     )
// });

// app.listen(process.env.PORT || config.port, () => console.log(`Server start on port ${config.port} ...`));