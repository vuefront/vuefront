import PostsGrid from './postsGrid';

PostsGrid.install = function(PostsGrid) {
  Vue.component(PostsGrid.name, PostsGrid);
};

export default PostsGrid;
