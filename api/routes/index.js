/* Controllers */
const postController = require('../controllers/posts');

module.exports = (app) => {
   app.post('/api/post/create', postController.create);
   app.get('/api/post/list', postController.listAll);
   app.get('/api/post/find/:id', postController.find);
   app.post('/api/post/update/', postController.update);
   app.delete('/api/post/delete/:id', postController.destroy);
};