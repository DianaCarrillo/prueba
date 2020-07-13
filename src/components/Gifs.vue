<template>
      <div class=" flex flex-col justify-center items-center pt-40 " >
          <section class="gif-container" >
              <div v-if="results" v-for="index in gifs" :key="index">
                <Gif :url="results[index].images.fixed_height.url" :modal="results[index].images.original.url" /> 
              </div>
                <p v-if=" results && !results.length" >No hay resultados de {{query}}</p>
            </section>
        </div>
</template>

<script>
import Gif from "./Gif";
export default {
  name: "Gifs",
  components: {
    Gif
  },
  props: {
    results: {
      type: Array,
      default: []
    },
    query: {
      type: String,
      default: null
    },
    gifsToShow: {
      type: Number,
      default: 0
    }
  },
  computed: {
    gifs() {
      if (this.results && this.results.length < 100) {
        return this.results;
      }
      return this.gifsToShow;
    }
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