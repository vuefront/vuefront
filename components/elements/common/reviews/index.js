import Reviews from './reviews';

Reviews.install = function(Reviews) {
  Vue.component(Reviews.name, Reviews);
};

export default Reviews;
