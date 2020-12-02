<template>
  <div class="vf-o-address-actions">
    <vf-a-button class="vf-o-address-actions__edit" :to="`/account/address/${address.id}/edit`">
      <vf-a-icon icon="pencil" />
    </vf-a-button>
    <vf-a-button class="vf-o-address-actions__remove" color="danger" @click="handleRemove">
      <vf-a-icon icon="delete-outline" />
    </vf-a-button>
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
