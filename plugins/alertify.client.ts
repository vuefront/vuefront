import Vue from 'vue';
import VueAlertify from 'vue-alertify';

Vue.use(VueAlertify, {
  notifier: {
    'position': 'top-right',
  },
  transition: 'flipy'
});
