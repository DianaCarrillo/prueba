<template>
      <div class=" flex flex-col justify-center items-center pt-40 " >
          <div class="">
          <section class="gif-container" >
              <div v-for="result in results" :key="result.id">
                <Gif :result="result">
                </Gif>
              </div>
            </section>
          </div>           
        </div>
</template>

<script>
import Gif from "./Gif";
export default {
  name: "Gifs",
  components: {
    Gif
  },
  // data() {
  //   return {
  //     show: false
  //   };
  // },
  props: {
    results: {
      type: Array,
      default: []
    },
    query: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>
.gif-container {
  /* display: flex; */
  /* overflow: hidden; */
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>