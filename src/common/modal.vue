<template>
  <div class="modal" v-show="isModalShow">
    <div class="modal-backdrop" @click="_closeModal('drop')"></div>
    <div class="modal-content">
      <div class="modal-title">
        <div class="modal-close" @click="_closeModal()">&times;</div>
        <slot name="modal-title"></slot>
      </div>
      <div class="modal-body">
        <slot name="modal-body"></slot>
      </div>
      <div class="modal-footer">
        <div v-if="$slots['modal-footer']">
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data () {
    return {
    }
  },
  props: {
    isModalShow: {
      type: Boolean,
      default: false
    },
    enableBackdrop: {
      type: Boolean,
      default: true
    }
  },
  watch: {
  },
  methods: {
    _closeModal (arg) {
      if (arg === 'drop') {
        this.enableBackdrop ? this.$emit('update:isModalShow', false) : ''
      } else {
        this.$emit('update:isModalShow', false)
      }
    },
    _showModal () {
      this.$emit('update:isModalShow', true)
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../assets/style/variable.less';
  .modal{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    .modal-backdrop{
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.7);
      z-index: 8889;
    }
    .modal-content{
      background-clip: padding-box;
      background-color: @white;
      border: 1px solid rgba(0, 0, 0, 0);
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      outline: 0 none;
      position: relative;
      z-index: 9999;
      width: 790px;
      height: 610px;
      margin: 50px auto;
      .modal-title{
        position: relative;
        padding: 20px 20px 15px 20px;
        border-bottom: 1px solid @border-light;
      }
      .modal-close{
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -ms-user-select: none;
      }
    }
  }
</style>
