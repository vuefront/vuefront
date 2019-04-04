import Root from './index.vue';

Root.install = function(Root) {
  Vue.component(Root.name, Root);
};

export default Root;
