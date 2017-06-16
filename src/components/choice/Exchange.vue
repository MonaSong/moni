<template>
  <div class="exchange">
    <div class="exchange-btn" @click="_changeGame" :style="{backgroundImage: 'url(' + changeIcon + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center left'}">exchange</div>
    <div class="game-big-img">
      <div class="game-img-item">
        <img :src="curImg" alt="">
        <div class="game-infomation">
          <p class="game-title">{{curTitle}}</p>
          <p>{{curDes}}</p>
        </div>
      </div>
    </div>
    <div class="game-download-info">
      <div class="game-item" :style="{backgroundImage: 'url(' + qrCodeIcon + ')',backgroundRepeat: 'no-repeat', backgroundPosition: 'top center'}"></div>
      <div class="game-item start-game">
        <a href="javascript:;" class="btn btn-default">begin game</a>
      </div>
      <div class="game-item game-gift" :style="{backgroundImage: 'url(' + giftIcon + ')',backgroundRepeat: 'no-repeat', backgroundPosition: 'top center'}">
      </div>
    </div>
  </div>
</template>
<script>
let pic01 = require('$IMG/001.png')
// let pic02 = require('$staticImg/002.png') 可行
import pic02 from '$IMG/002.png'
export default {
  name: 'exchange',
  data () {
    return {
      imgUrlList: [
        {imgUrl: pic01, title: 'this is game one this is game two', description: 'game description 001'},
        {imgUrl: pic02, title: 'this is game two this is game one', description: 'game description 002'}
      ],
      curImg: null,
      curTitle: null,
      curDes: null,
      curIndex: 0,
      changeIcon: require('$IMG/change.png'),
      qrCodeIcon: require('$IMG/qrcode-bg.png'),
      giftIcon: require('$IMG/gift-bg.png')
    }
  },
  created () {
    this._setGameInfo(0)
  },
  methods: {
    _setGameInfo (index) {
      this.curImg = this.imgUrlList[index].imgUrl
      this.curTitle = this.imgUrlList[index].title
      this.curDes = this.imgUrlList[index].description
    },
    _changeGame () {
      var len = this.imgUrlList.length
      this.curIndex++
      if (this.curIndex > len - 1) {
        this.curIndex = 0
      }
      this._setGameInfo(this.curIndex)
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../assets/style/variable.less';
  .exchange{
    position: relative;
    height: 340px;
    .exchange-btn{
      position: relative;
      float: right;
      margin-right: 15px;
      padding-left: 20px;
      top: 20px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -ms-user-select: none;
      cursor: pointer;
      font-size: 13px;
    }
    .game-big-img{
      position: relative;
      margin-left: -10px;
      top: 50px;
      text-align: center;
      width: 270px;
      height: 200px;
      border-radius: 10px;
      overflow: hidden;
      img{
        width: 110px;
        height: 110px;
        border-radius: 10px;
      }
    }
    .game-infomation{
      position: relative;
      z-index: 10;
      color: @color-dark;
      p{
        font-size: 14px;
        margin: 5px 0;
      }
    }
    .game-download-info{
      position: relative;
      top: 50px;
      left: 10px;
      .game-item{
        float: left;
        width: 50px;
        height: 35px;
        margin-left: 15px; 
        text-align: center;
        &:first-child{
          margin-left: 0;
        }
        &.start-game{
          position: relative;
          width: 100px;
          a{
            padding: 8px 15px;
          }
        }
        p{
          text-align: center;
          font-size: 12px;
          color: #555;
        }
      }
    }
  }
</style>
