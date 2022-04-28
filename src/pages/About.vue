<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import Carousel from "@/components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Home from "../pages/Home.vue";
export default {
  name: "About",
  components: {
    Carousel,
    Slide,
    Home,
  },
};
</script>

<style lang="scss" scoped></style>
