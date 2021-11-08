<template>
  <div class="vf-e-common-slideshow">
    <div ref="image_holder" class="vf-e-common-slideshow__images">
      <vf-a-image
        v-for="(img, index) in sliderItems"
        :key="index"
        :src="img"
        :width-amp="1110"
        :height-amp="370"
        class="vf-e-common-slideshow__image"
        :class="{
          '--animated-right': switching && isRight,
          '--animated-left': switching && !isRight,
          '--current': index === active,
        }"
        :style="sliderStyle"
      />
      <div v-if="sliderArrows" class="vf-e-common-slideshow__arrows">
        <vf-a-button
          color="transparent"
          size="sm"
          class="vf-e-common-slideshow__arrow --left"
          :disabled="switching"
          @click="handleClick(active - 1, false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#191919"
          >
            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
            <path
              d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"
            />
          </svg>
        </vf-a-button>
        <vf-a-button
          color="transparent"
          size="sm"
          class="vf-e-common-slideshow__arrow --right"
          :disabled="switching"
          @click="handleClick(active + 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#191919"
          >
            <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
            <g>
              <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
            </g>
          </svg>
        </vf-a-button>
      </div>
    </div>
    <div v-if="sliderNav" class="vf-e-common-slideshow__nav-points">
      <div
        v-for="(slide, index) in sliderItems"
        :key="index"
        class="vf-e-common-slideshow__nav-point"
        :class="{
          '--current': index === active,
          hidden: index === 0 || index === sliderItems.length - 1,
        }"
        @click="handleClick(index, index > active)"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, PropType, ref } from "vue";
const props = defineProps({
  items: {
    type: Array as PropType<string[]>,
    default() {
      return [];
    },
  },
  sliderArrows: {
    type: Boolean,
    default() {
      return false;
    },
  },
  sliderNav: {
    type: Boolean,
    default() {
      return false;
    },
  },
});
const active = ref(1);
const interval = ref<NodeJS.Timer | null>(null);
const switching = ref(false);
const animate = ref(true);
const isRight = ref(true);
const currentTranslate = ref(-100);

const sliderStyle = computed(() => {
  return {
    transition: `${animate.value && "transform linear .3s"}`,
    transform: `translateX(${currentTranslate.value + "%"})`,
  };
});
const sliderItems = computed(() => {
  return [props.items[props.items.length - 1], ...props.items, props.items[0]];
});
onMounted(() => {
  setTimeout(() => {
    interval.value = setInterval(() => {
      switchSlide(active.value + 1);
    }, 4000);
  }, 10000);
});

const switchSlide = (slideIndex: number) => {
  switching.value = true;
  isRight.value
    ? (currentTranslate.value = -slideIndex * 100)
    : (currentTranslate.value += (active.value - slideIndex) * 100);
  if (slideIndex === sliderItems.value.length - 1) {
    active.value = 1;
    setTimeout(() => {
      animate.value = false;
      currentTranslate.value = -100;
    }, 310);
    setTimeout(() => {
      switching.value = false;
      animate.value = true;
    }, 340);
  } else if (slideIndex === 0) {
    active.value = sliderItems.value.length - 2;
    setTimeout(() => {
      animate.value = false;
      currentTranslate.value = -(sliderItems.value.length - 2) * 100;
    }, 310);
    setTimeout(() => {
      switching.value = false;
      animate.value = true;
    }, 340);
  } else {
    active.value = slideIndex;
    setTimeout(() => {
      switching.value = false;
    }, 300);
  }
};
const handleClick = (slideIndex: number, isRightLoc = true) => {
  if (interval.value) {
    clearInterval(interval.value);
    interval.value = null;
  }
  isRight.value = isRightLoc;
  switchSlide(slideIndex);
};
</script>
