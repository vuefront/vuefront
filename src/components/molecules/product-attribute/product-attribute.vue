<template>
  <section class="product-attribute">
    <vf-m-row tag="dl">
      <template v-for="(value, key) in items">
        <vf-m-col :key="`name-${key}`" sm="3" tag="dt">
          <vf-a-heading level="6" class="product-info__attribute_name text-sm mb-0">{{value.name}}</vf-a-heading>
        </vf-m-col>
        <vf-m-col :key="`value-${key}`" sm="9" tag="dd">
          <div
            v-for="(option, optionKey) in value.options"
            :key="optionKey"
            class="product-info__attribute_value text-sm"
          >{{option}}</div>
        </vf-m-col>
      </template>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  props: ["items"]
};
</script>
