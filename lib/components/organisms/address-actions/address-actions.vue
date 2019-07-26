<template>
  <div class="account-address__action ma-1" style="width: 85px;">
    <vf-a-link :to="`/account/address/${address.id}/edit`" class="cursor-pointer color-inherit">
      <vf-a-icon icon="pencil-alt" />
    </vf-a-link>
    <span @click="handleRemove" class="cursor-pointer">
      <vf-a-icon icon="times" />
    </span>
  </div>
</template>
<script>
export default {
  props: {
    address: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  methods: {
    async handleRemove() {
      await this.$store.dispatch("common/address/remove", {
        id: this.address.id
      });
    },
    handleEdit() {
      this.$router.push(`/account/address/${this.address.id}/edit`);
    }
  }
};
</script>
