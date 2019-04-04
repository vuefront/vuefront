import Toast from './toast';

Toast.install = function(Toast) {
  Vue.component(Toast.name, Toast);
};

export default Toast;
