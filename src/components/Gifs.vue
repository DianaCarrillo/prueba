<template>
  <div class="flex flex-col justify-center items-center pt-40">
    <section :class="{'gif-container': !gifsToShow.length}">
      <div v-for="(gif, gIndex) in gifs" :key="gIndex">
        <Gif
          :url="gif.images.fixed_height.url"
          :modal="gif.images.original.url"
        />
      </div>
      <p class="" v-if="!gifsToShow">No hay resultados de <span class="font-bold">{{q}}</span></p>
    </section>
  </div>
</template>

<script>
import Gif from "./Gif";
import { mapState } from "vuex";

export default {
  name: "Gifs",
  components: {
    Gif
  },
  computed: {
    ...mapState(["q", "gifsToShow", "gifs"])
  }
};
</script>

<style scoped>
.gif-container {
  display: grid;
}

@media screen and (min-width: 480px) {
  .gif-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 678px) {
  .gif-container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1024px) {
  .gif-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>