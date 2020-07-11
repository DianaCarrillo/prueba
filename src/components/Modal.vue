<template>
    <transition name="modal">
        <div class="modal-mask cursor-pointer justify-center " @click="$emit('close', false)">
          <div class="modal-wrapper">
            <div class="modal-container">
               <slot></slot>
              </div>
            </div>
          </div>
      </transition>
</template>

<script>
export default {
  name: "Modal"
  //   props: {
  //     result: {
  //       type: Array,
  //       default: []
  //     }
  //   }
};
</script>

<style  scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: flex;
  justify-content: center;
  width: 450px;
  height: 400px;
  margin: 0px auto;
  padding: 20px 20px;
  background-color: #ffffff;
  border-radius: 0.3em;
  transition: all 0.3s ease;
}
@media screen and (max-width: 480px) {
  .modal-container {
    width: 300px;
    height: 300px;
    padding: 5px 5px;
    background-color: #ffffff;
  }
}
</style>