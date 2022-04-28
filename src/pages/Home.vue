<template>
  <div class="Home">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="true"
      :timeout="10000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="getImageUrl(slide)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(`../assets/images/${name}.jpg`, import.meta.url).href;
    };
    const carouselSlides = [1, 2, 3, 4, 5];

    return { carouselSlides, getImageUrl };
  },
};
</script>
