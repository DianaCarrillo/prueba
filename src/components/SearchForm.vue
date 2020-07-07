<template>
<div>
    <div class="flex w-full justify-center p-8 bg-gray-400 fixed z-20">
          <p class="text-4xl mr-4">Search <span class="font-bold">{{q}}</span> gifs</p>
      <form action=""   @submit.prevent="search">
       <input type="text" v-model="q" class=" mr-4 p-4" placeholder="Search gifs">
       <button class="mr-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 shadow-md focus:shadow-none" >Search</button>
       </form>
      <button class="mr-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 shadow-md focus:shadow-none" @click="search" :disabled="!q" >Load more</button> 
      </div>
    <Gifs :results="results" :query="q"/>
</div>

</template>

<script>
import Gifs from "./Gifs.vue";
import axios from "axios";
const apiKey = "7oqbWiAr4RXO48oFiX2amhSTciHjnjY3";
const url = "http://api.giphy.com/v1/gifs/search";
export default {
  data: function() {
    return {
      q: "",
      results: null,
      limit: 0,
      disabledMoreBtn: false
    };
  },
  components: {
    Gifs
  },
  watch: {
    q(old, newVal) {
      if (old !== newVal) {
        this.limit = 0;
      }
    }
  },
  methods: {
    search() {
      axios
        .get(url, {
          params: {
            q: this.q.split(" ").join("+"),
            apiKey: apiKey,
            limit: (this.limit += 10)
          }
        })
        .then(response => {
          console.log(this.q);
          this.results = response.data.data;
          console.log(this.results);
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
button:focus,
input:focus {
  outline: none;
}
</style>
