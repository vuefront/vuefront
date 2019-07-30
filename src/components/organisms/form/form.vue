<template>
  <b-form @submit="onSubmit" @reset="onReset" class="vf-o-form">
    <div v-if="!inline" :class="{'mb-5' : $slots['sub-title']}">
      <vf-a-heading v-if="$slots['sub-title']" tag="h6" level="3">
        <slot name="title"></slot>
      </vf-a-heading>
      <div
        :class="{'mb-3': !$slots['sub-title'], 'mb-0': $slots['sub-title']}"
        class="vf-o-form__title title"
      >
        <slot :name="$slots['sub-title'] ? 'sub-title': 'title'"></slot>
      </div>
    </div>

    <vf-a-alert :show="error.message" v-html="error.message" />

    <slot></slot>

    <div class="text-sm-left mt-4" v-if="button">
      <vf-a-button type="submit" color="primary" size="sm" rounded>
        <slot name="button"></slot>
      </vf-a-button>
    </div>
  </b-form>
</template>
<script>
import { BForm } from "bootstrap-vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BForm
  },
  props: {
    inline: {
      type: Boolean,
      default() {
        return false;
      }
    },
    button: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit("submit", e);
    },
    onReset(e) {
      e.preventDefault();
      this.$emit("reset", e);
    }
  }
};
</script>
