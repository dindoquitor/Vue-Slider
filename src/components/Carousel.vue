<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
    <!-- Navigation -->
    <div class="navigate">
      <div class="toggle-img left">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-img right">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
export default {
  setup() {
    const currentSlide = ref(1);
    const getSlideCount = ref();

    //next slide

    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value = +1;
    };

    //Prev Slide
    //Next thing to do

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
      console.log(getSlideCount.value);
    });

    return { currentSlide, nextSlide };
  },
};
</script>
