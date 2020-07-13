<template>
  <div>
    <div
      class="search-container items-center flex w-full justify-center lg:p-4 p-4 bg-gray-400 fixed z-20"
    >
      <p class="lg:text-3xl text-3xl mr-4 pb-2">
        Search
        <router-link :to="`/search/${q}`" class="font-bold">{{q}}</router-link> gifs
      </p>
      <section class="flex">
        <form action class="flex" @submit.prevent="search">
          <input
            type="text"
            v-model="q"
            class="h-10 outline-none lg:w-full w-3/4 lg:mr-4 mr-2 p-2"
            placeholder="Search gifs"
          />
          <Button name="Search" :disabled="disabledSearch" class="mr-2" />
        </form>
        <Button name="Load more" :method="loadMore" :disabled="disabledLoad" />
      </section>
    </div>
    <Gifs :result="gifs" :gifsToShow="gifsToShow" :query="q" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Gifs from "./Gifs.vue";
import axios from "axios";
const apiKey = "7oqbWiAr4RXO48oFiX2amhSTciHjnjY3";
const url = "http://api.giphy.com/v1/gifs/search";
export default {
  data: function() {
    return {
      q: "",
      results: [],
      gifs: [],
      disabledMoreBtn: false,
      disabledSearchBtn: false,
      gifsToShow: 10
    };
  },
  components: {
    Gifs,
    Button
  },
  created() {
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
      if (
        this.gifsToShow >= 100 ||
        !this.q ||
        (this.results && this.results.length < 10)
      ) {
        return (this.disabledMoreBtn = true);
      }
    }
  },
  watch: {
    q(old, newVal) {
      if (old !== newVal) {
        this.gifsToShow = 10;
      }
    }
  },
  methods: {
    loadMore() {
      return (this.gifs = this.results.slice(0, (this.gifsToShow += 10)));
    },
    async search() {
      await axios
        .get(url, {
          params: {
            q: this.q.split(" ").join("+"),
            apiKey: apiKey,
            limit: 100
          }
        })
        .then(response => {
          if (this.$route.params.id !== this.q) {
            this.$router.push({ name: "Home", params: { id: this.q } });
          }
          this.results = response.data.data;

          const { pagination } = response.data;
          // saco pagination, lo convierto en variable y puedo acceder a sus valores
          this.gifsToShow = pagination.count < 10 ? pagination.count : 10;
          this.gifs = this.results.slice(0, this.gifsToShow);
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
