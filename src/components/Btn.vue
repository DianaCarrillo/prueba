<template>
       <button class="mr-4 bg-gray-100 p-4 rounded-lg shadow-md focus:shadow-none" :class="{'text-gray-500 hover:bg-gray-100 shadow-inner cursor-not-allowed': disabled, 'hover:bg-gray-200 pointer-none': !disabled}" :disabled="disabled" @click="method" >{{name}}</button>
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

<style lang="scss" scoped>
</style>