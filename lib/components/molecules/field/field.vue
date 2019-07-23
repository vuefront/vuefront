<template>
  <b-form-group :label-for="id" :state="state">
    <template #label>
      <slot name="label"></slot>
    </template>
    <slot :aria-describedby="`${id}-feedback`" :state="state"></slot>
    <b-form-invalid-feedback :state="state" :id="`${id}-feedback`">
      <slot name="error"></slot>
    </b-form-invalid-feedback>
  </b-form-group>
</template>
<script>
import { BFormGroup, BFormInvalidFeedback } from "bootstrap-vue";
export default {
  components: {
    BFormGroup,
    BFormInvalidFeedback
  },
  props: {
    id: {
      type: String,
      default() {
        return "";
      }
    },
    label: {
      type: String,
      default() {
        return null;
      }
    },
    error: {
      type: String,
      default() {
        return "";
      }
    },
    state: {
      type: Boolean,
      default() {
        return null;
      }
    }
  }
};
</script>

