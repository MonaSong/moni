<template>
  <div class="banner">
    <div class="banner-big-img">
      <img :src="bannerImg">
    </div>
    <div class="banner-bar">
      <a  href="" v-for="(item, $index) in thumImgList" :data-index="$index" @mouseenter="_enter"><img :src="item.imgUrl" alt=""></a>
    </div>
  </div>
</template>
<script>
let pic01 = require('$IMG/001.png')
let pic02 = require('$IMG/002.png')
export default {
  name: 'banner',
  data () {
    return {
      bannerImg: pic01,
      thumImgList: [
        {imgUrl: pic01, active: true},
        {imgUrl: pic02, active: false},
        {imgUrl: pic01, active: false},
        {imgUrl: pic01, active: false},
        {imgUrl: pic01, active: false}
      ]
    }
  },
  mounted () {
    this._setStatus('first')
  },
  methods: {
    _setStatus (type) {
      var bannerBarDom = document.getElementsByClassName('banner-bar')[0]
      var barImgList = bannerBarDom.getElementsByTagName('a')
      if (type === 'all') {
        for (let i = 0; i < barImgList.length; i++) {
          barImgList[i].style.top = '0px'
          barImgList[i].style.borderColor = 'transparent'
        }
      } else if (type === 'first') {
        barImgList[0].style.top = '-10px'
        barImgList[0].style.borderColor = '#4ccbfa'
      }
    },
    _enter (e) {
      var curDom = e.currentTarget
      this._setStatus('all')
      curDom.style.top = '-10px'
      curDom.style.borderColor = '#4ccbfa'
      curDom.style.transition = 'top .2s linear'
      this.bannerImg = curDom.getElementsByTagName('img')[0].src
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../assets/style/variable.less';
  .banner{
    position: relative;
    width: 770px;
    .banner-big-img{
      width: 770px;
      height: 340px;
      img{
        width: 770px;
        height: 340px;
      }
    }
    .banner-bar{
      position: absolute;
      bottom: 10px;
      height: 55px;
      left: 90px;
      a{
        position: relative;
        display: block;
        float: left;
        width: 100px;
        height: 55px;
        overflow: hidden;
        margin-left: 7px;
        transition: top linear .2s;
        top: 0px;
        border: 2px solid transparent;
        &:first{
          margin-left: 0;
        }
        &:hover{
          transition: top linear .2s;
        }
        &.cur{
          transition: top linear .2s;
          top: -10px;
        }
        img{
          width: 108px;
          height: 55px;
        }
      }
    }
  }

  @media (max-width:824px) {
    .banner{
      width: 100%;
      .banner-big-img{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
