<template>
  <div class="hello">
    <form action="" @submit.prevent="search">
      <input type="text" v-model="q">
      <button>search</button>
    </form>
    <p>{{q}}</p>
    <section>
      <div class="gif-container">
          <img class="gif" v-for="result in results" :key="result.id" :src="result.images.original.url" alt="">  
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
const apiKey = "7oqbWiAr4RXO48oFiX2amhSTciHjnjY3";
const url = "http://api.giphy.com/v1/gifs/search";
export default {
  data: function() {
    return {
      q: "",
      results: null,
      limit: 10
    };
  },
  methods: {
    search() {
      axios
        .get(url, {
          params: {
            q: this.q.split(" ").join("+"),
            apiKey: apiKey,
            limit: this.limit
          }
        })
        .then(response => {
          console.log(this.q);
          this.results = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gif-container {
  display: flex;
  /* overflow: hidden; */
}
.gif {
  padding: 0.5rem;
}
</style>
