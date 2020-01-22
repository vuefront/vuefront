import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductOptionText from './text.vue';
import vfMProductOptionSelect from './select.vue';
import vfMProductOptionRadio from './radio.vue';
import vfMProductOptionCheckbox from './checkbox.vue';
import vfMProductOptionTextarea from './textarea.vue';
import vfMProductOptionDatetime from './datetime.vue';
import vfMProductOptionDate from './date.vue';
import vfMProductOptionTime from './time.vue';
import vfMProductOptionFile from './file.vue';
import product from '@/.storybook/store/product.js';
storiesOf('molecule|Product Option', module).add('text', function () {
  return {
    components: {
      vfMProductOptionText: vfMProductOptionText
    },
    template: "<vf-m-product-option-text :option=\"option\"/>",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
}).add('select', function () {
  return {
    components: {
      vfMProductOptionSelect: vfMProductOptionSelect
    },
    template: "<vf-m-product-option-select :option=\"option\" />",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
}).add('radio', function () {
  return {
    components: {
      vfMProductOptionRadio: vfMProductOptionRadio
    },
    template: "<vf-m-product-option-radio :option=\"option\" />",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
}).add('checkbox', function () {
  return {
    components: {
      vfMProductOptionCheckbox: vfMProductOptionCheckbox
    },
    template: "<vf-m-product-option-checkbox :option=\"option\" />",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
}).add('textarea', function () {
  return {
    components: {
      vfMProductOptionTextarea: vfMProductOptionTextarea
    },
    template: "<vf-m-product-option-textarea :option=\"option\" />",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
}).add('date', function () {
  return {
    components: {
      vfMProductOptionDate: vfMProductOptionDate
    },
    template: "<vf-m-product-option-date :option=\"option\" />",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
}).add('datetime', function () {
  return {
    components: {
      vfMProductOptionDatetime: vfMProductOptionDatetime
    },
    template: "<vf-m-product-option-datetime :option=\"option\" />",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
}).add('time', function () {
  return {
    components: {
      vfMProductOptionTime: vfMProductOptionTime
    },
    template: "<vf-m-product-option-time :option=\"option\" />",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
}).add('file', function () {
  return {
    components: {
      vfMProductOptionFile: vfMProductOptionFile
    },
    template: "<vf-m-product-option-file :option=\"option\" />",
    data: function data() {
      return {
        option: product.options[0]
      };
    }
  };
}, {
  info: {}
});