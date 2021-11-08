<template>
  <div class="flex">
    <span v-for="rating in [1, 2, 3, 4, 5]" :key="rating" v-bind="$attrs">
      <vf-m-skeleton
        width="1.125em"
        height="18px"
        class="inline-block mr-1"
      ></vf-m-skeleton>
    </span>
  </div>
</template>
