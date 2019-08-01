<template>
  <div class="loading-page">
    <vf-m-row align-h="center" class="mb-5" style="padding-top: 16px;">
      <vf-m-col v-for="(value) in [1,2,3,4,5,6]" :key="value" sm="4" md="2">
        <vf-l-category-thumb/>
      </vf-m-col>
    </vf-m-row>
  </div>
</template>
