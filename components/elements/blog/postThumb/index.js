import PostThumb from './postThumb';

PostThumb.install = function(PostThumb) {
  Vue.component(PostThumb.name, PostThumb);
};

export default PostThumb;
