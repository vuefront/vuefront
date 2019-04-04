import Post from './post';

Post.install = function(Post) {
  Vue.component(Post.name, Post);
};

export default Post;
