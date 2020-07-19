<template>
    <div  class="m-8 bg-gray-300 custom-shadow ">
        <img @click="show = true" class=" h-56 w-64 cursor-pointer bg-gray-300  hover:opacity-50 mb-0"  :src="url" alt="">  
          <div class=" button-link p-4 flex w-64 items-center justify-between mt-0 bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-white" @click="copyToClipBoard()">
              <span class=" material-icons pr-2">content_copy</span> 
              <input ref="link" :value="url" class="cursor-pointer absolute opacity-0"/>
            <div>
              <p v-if="!copied" class="truncate w-40">{{url}}</p>
              <p v-else class="truncate font-bold scale">Copied!</p>
            </div>
          </div>
          <Modal  v-if="show" @close="show = false">
              <img class="w-full h-full" :src="modal" alt="">
          </Modal>
    </div> 
</template>

<script>
import Modal from "./Modal";
import { setTimeout } from "timers";

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
    url: {
      type: String,
      default: null
    },
    modal: {
      type: String,
      default: null
    }
  },

  methods: {
    copyToClipBoard() {
      let link = this.$refs.link;
      link.select();
      document.execCommand("copy");
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1500);
    }
  }
};
</script>

<style  scoped>
.custom-shadow {
  box-shadow: -1px -1px 40px #9e9ead;
}
.button-link:active {
  background-color: rgba(98, 111, 122, 0.219);
}
</style>