<template>
  <div class="home">
    <SearchForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: "Home",
  components: {
    SearchForm
  }
};
</script>
