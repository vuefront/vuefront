import SnackBar from './snackBar';

SnackBar.install = function(SnackBar) {
  Vue.component(SnackBar.name, SnackBar);
};

export default SnackBar;
