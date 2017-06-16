<template>
  <div class="idx">
    <classfiy></classfiy>
    <modal :isModalShow.sync="isShow" :enableBackdrop="true">
      <div slot="modal-title">这个是modal的标题</div>
      <div slot="modal-body">
        <div>这个是modal的主体内容</div>
      </div>
      <!--<div slot="modal-footer">modal-footer</div>-->
    </modal>
    <span @click="isShow = true" class="btn btn-primary">你好</span>
  </div>
</template>
<script>
import Classfiy from './classify/classify.vue'
import Modal from '../common/modal.vue'
export default {
  name: 'Idx',
  data () {
    return {
      isShow: true
    }
  },
  components: {
    Classfiy,
    Modal
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
</style>
