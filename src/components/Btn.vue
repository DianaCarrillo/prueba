<template>
       <button class="h-10 flex items-center outline-none lg:mr-4 bg-gray-100 lg:p-4 px-2 rounded-lg shadow-md focus:shadow-none whitespace-no-wrap" :class="{'text-gray-500 hover:bg-gray-100 shadow-inner cursor-not-allowed': disabled, 'hover:bg-gray-200 pointer-none': !disabled}" :disabled="disabled" @click="method" >{{name}}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    method: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style scoped>
button {
  outline: none;
}
</style>