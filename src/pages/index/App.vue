<template>
  <div id="app" class="clearfix">
    <Choice></Choice>
  </div>
</template>

<script>
import Choice from '@/components/Choice'
export default {
  name: 'app',
  components: {
    Choice
  }
}
</script>

<style lang="less">
 @import '../../assets/style/variable.less';
  #app {
    width: 1080px;
    background-color: @body-color;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 40px;
  }
</style>
