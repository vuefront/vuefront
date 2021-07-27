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
        :class="{'--animated-right' : switching && isRight, '--animated-left' : switching && !isRight, '--current' : index === active}"
        :style="sliderStyle"
      />
      <div v-if="sliderArrows" class="vf-e-common-slideshow__arrows">
        <vf-a-button color="transparent" size="sm" class="vf-e-common-slideshow__arrow --left" :disabled="switching" @click="handleClick(active-1, false)">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#191919"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" /></svg>
        </vf-a-button>
        <vf-a-button color="transparent" size="sm" class="vf-e-common-slideshow__arrow --right" :disabled="switching" @click="handleClick(active+1)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#191919"
          ><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g></svg>
        </vf-a-button>
      </div>
    </div>
    <div v-if="sliderNav" class="vf-e-common-slideshow__nav-points">
      <div v-for="(slide, index) in sliderItems" :key="index" class="vf-e-common-slideshow__nav-point" :class="{'--current' : index===active, 'hidden' : (index === 0) || (index === sliderItems.length - 1)}" @click="handleClick(index, index > active)" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    sliderArrows: {
      type: Boolean,
      default () {
        return false
      }
    },
    sliderNav: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      active: 1,
      interval: null,
      switching: false,
      animate: true,
      isRight: true,
      currentTranslate: -100
    }
  },
  computed: {
    sliderStyle () {
      return {
        transition: `${this.animate && 'transform linear .3s'}`,
        transform: (
           `translateX(${this.currentTranslate + '%'})`
        )
      }
    },
    sliderItems () {
      return [this.items[this.items.length - 1], ...this.items, this.items[0]]
    }
  },
  mounted () {
    setTimeout(() => {
      this.interval = setInterval(() => {
        this.switchSlide(this.active + 1)
      }, 4000)
    }, 10000)
  },
  methods: {
    switchSlide (slideIndex) {
      this.switching = true
      this.isRight ? this.currentTranslate = -slideIndex * 100 : this.currentTranslate += (this.active - slideIndex) * 100
      if (slideIndex === this.sliderItems.length - 1) {
        this.active = 1
        setTimeout(() => {
          this.animate = false
          this.currentTranslate = -100
        }, 310)
        setTimeout(() => {
          this.switching = false
          this.animate = true
        }, 340)
      } else if (slideIndex === 0) {
        this.active = this.sliderItems.length - 2
        setTimeout(() => {
          this.animate = false
          this.currentTranslate = -(this.sliderItems.length - 2) * 100
        }, 310)
        setTimeout(() => {
          this.switching = false
          this.animate = true
        }, 340)
      } else {
        this.active = slideIndex
        setTimeout(() => { this.switching = false }, 300)
      }
    },
    handleClick (slideIndex, isRight = true) {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
      this.isRight = isRight
      this.switchSlide(slideIndex)
    }
  }
}
</script>