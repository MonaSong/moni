<template>
  <div class="choice">
    <div class="left">
      <banner></banner>
      <popular-hot></popular-hot>
      <packs></packs>
    </div>
    <div class="right" :style="{backgroundImage: 'url(' + exchangeBg + ')', backgroundPosition: 'left 0', backgroundRepeat: 'no-repeat', backgroundColor: '#fcfcfc'}">
      <exchange></exchange>
      <game-rank></game-rank>
      
      <br>
      <br>
      <br>
      <br>
      <br>

      <mona></mona>
    </div>
  </div>
</template>

<script>
import Banner from './choice/Banner.vue'
import PopularHot from './choice/PopularHot.vue'
import Packs from './choice/Packs.vue'
import Exchange from './choice/Exchange.vue'
import GameRank from './choice/GameRank.vue'
import Mona from './choice/Mona.vue'
export default {
  name: 'choice',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      exchangeBg: require('$IMG/exchange.jpg')
    }
  },
  components: {
    Banner,
    PopularHot,
    Packs,
    Exchange,
    GameRank,
    Mona
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .choice{
    margin: 0;
    padding: 0;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  @import '../assets/style/variable.less';
  .left{
    position: relative;
    width:770px;
    float: left;
  }
  .right{
    width: 270px;
    padding-left: 20px;
    height: 970px;
    float: right;
    background-color: #f30026;
    /*background: url('../../static/assets/images/exchange.jpg') no-repeat #fcfcfc left 0;*/
  }
</style>
