<template>
  <section class="vf-m-product-attribute">
    <vf-m-row tag="dl">
      <template v-for="(value, key) in attributes" :key="key">
        <vf-m-col xs="4" tag="dt">
          <vf-a-heading level="6" class="vf-m-product-attribute__name">{{
            value.name
          }}</vf-a-heading>
        </vf-m-col>
        <vf-m-col xs="8" tag="dd">
          <div
            v-for="(option, optionKey) in value.options"
            :key="optionKey"
            class="vf-m-product-attribute__value"
          >
            {{ option }}
          </div>
        </vf-m-col>
      </template>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  props: ["attributes"],
};
</script>
