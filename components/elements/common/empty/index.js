import Empty from './empty';

Empty.install = function(Empty) {
  Vue.component(Empty.name, Empty);
};

export default Empty;
