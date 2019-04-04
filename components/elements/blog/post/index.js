import Post from './Post';

Post.install = function(Post) {
  Vue.component(Post.name, post);
};

export default Post;
