<template>
    <div  class="m-8 bg-gray-300 custom-shadow ">
        <img @click="show = true" class=" h-56 w-64 cursor-pointer bg-gray-300  hover:opacity-50 mb-0"  :src="result.images.fixed_height.url" alt="">  
          <div class="p-4 flex w-64 items-center justify-between mt-0 bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-white" @click="copyToClipBoard(result.images.original.url)">
              <span class=" material-icons pr-2">content_copy</span> 
              <!-- <span class="font-bold pr-2">Copy URL</span> -->
              <!-- <span>share URL:</span>  -->
              <input ref="link" :value="result.images.fixed_height.url" class="cursor-pointer absolute opacity-0"/>
            <div>
              <p v-if="!copied" class="truncate w-40">{{result.images.fixed_height.url}}</p>
              <p v-else class="truncate font-bold scale">copied!</p>
            </div>
          </div>
          <Modal  v-if="show" @close="show = false">
              <img class="w-full h-full" :src="result.images.original.url" alt="">
          </Modal>
    </div> 
</template>

<script>
import Modal from "./Modal";

export default {
  name: "Gif",
  components: {
    Modal
  },
  data() {
    return {
      show: false,
      copied: false
    };
  },
  props: {
    result: {
      type: Object,
      default: {}
    }
  },

  methods: {
    copyToClipBoard() {
      let link = this.$refs.link;
      link.select();
      document.execCommand("copy");
      this.copied = true;
    }
    // showModal() {
    //   console.log("holi");
    // }
  }
};
</script>

<style  scoped>
.custom-shadow {
  box-shadow: -1px -1px 40px #9e9ead;
}
.gif {
  /* grid-gap: 1rem; */
}
.scale {
  transition: scale 0.5s ease-in-out;
  transform: scale(1);
}
</style>