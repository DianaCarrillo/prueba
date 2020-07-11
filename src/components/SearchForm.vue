<template>
<div>
     <div class="search-container items-center flex w-full justify-center lg:p-4 p-4 bg-gray-400 fixed z-20">
          <p class="lg:text-3xl text-3xl mr-4 pb-2 ">Search <router-link :to="`/search/${q}`" class="font-bold">{{q}}</router-link> gifs</p>
      <section class="flex">
        <form action="" class="flex"  @submit.prevent="search">
        <input type="text" v-model="q" class="h-10 outline-none lg:w-full w-3/4 lg:mr-4 mr-2 p-2" placeholder="Search gifs">
        <Btn name="Search" :disabled="disabledSearch" class="mr-2" />
       </form>
       <Btn v-if="results && results.length >= 10" name="Load more" :method="search" :disabled="disabledLoad"/>
      </section>
      
      </div>
    <Gifs :results="results" :query="q"/> 
</div>

</template>

<script>
import Btn from "./Btn.vue";
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
      disabledMoreBtn: false,
      disabledSearchBtn: false
    };
  },
  components: {
    Gifs,
    Btn
  },
  mounted() {
    if (this.$route.params.id) {
      this.q = this.$route.params.id;
      this.search();
    }
  },
  computed: {
    disabledSearch() {
      if (!this.q) {
        return (this.disabledSearchBtn = true);
      }
    },
    disabledLoad() {
      if (this.limit >= 100 || !this.q) {
        return (this.disabledMoreBtn = true);
      }
    }
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
          if (this.$route.params.id !== this.q) {
            this.$router.push({ name: "Home", params: { id: this.q } });
          }
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
@media screen and (max-width: 480px) {
  .search-container {
    flex-direction: column;
  }
}
</style>
