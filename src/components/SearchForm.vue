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
            :value="q"
            @input="updateQuery"
            class="h-10 outline-none lg:w-full w-3/4 lg:mr-4 mr-2 p-2"
            placeholder="Search gifs"
          />
          <Button name="Search" :disabled="disabledSearch" class="mr-2" />
        </form>
        <Button name="Load more" :method="loadMore" :disabled="disabledLoad" />
      </section>
    </div>
    <Gifs  />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Gifs from "./Gifs.vue";
import { mapState } from "vuex";
export default {
  data: function() {
    return {};
  },
  components: {
    Gifs,
    Button
  },
  created() {
    if (this.$route.params.id && this.q) {
      this.q = this.$route.params.id;
      this.search();
    }
  },
  computed: {
    ...mapState(["q", "giftsToShow"]),
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
  methods: {
    search() {
      this.$store.dispatch("search");
    },
    loadMore() {
      this.$store.commit("loadMore");
    },
    updateQuery(e) {
      this.$store.commit("updateQuery", e.target.value);
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
