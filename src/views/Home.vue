<template>
  <div class="home">
    <SearchForm />
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
