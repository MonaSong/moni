<template>
  <div class="packs">
    <h4 class="title-underline">
      gift
      <a href="javascript:;">more</a>
      </h4>
    <div class="packs-container">
      <div class="packs-item" v-for="item in list">
        <img :src="item.imgUrl"> 
        <div class="packs-bottom" :style= "{backgroundImage: 'url(' + packTitleImg + ')', backgroundRepeat: 'repeat-x'}">
          <a href="javascript:;" class="title">{{item.title}}</a>
          <a href="javascript:;" class="packs-btn btn btn-orange">get gift</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let pic01 = require('$IMG/001.png')
let pic02 = require('$IMG/002.png')
export default {
  name: 'packs',
  data () {
    return {
      list: [
        {imgUrl: pic01, title: 'get gift get gift get gift get gift get gift get gift'},
        {imgUrl: pic02, title: 'get gift get gift get gift get gift get gift get gift'},
        {imgUrl: pic01, title: 'get gift get gift get gift get gift get gift get gift'}
      ],
      packTitleImg: require('$IMG/title-bg.png')
    }
  }
}
</script>
<style lang="less" scoped>
  .packs-container{
    padding-left: 15px;
    .packs-item{
      position: relative;
      float: left;
      width: 235px;
      height: 125px;
      margin-left: 15px;
      &:first-child{
        margin-left: 0;
      }
      img{
        width: 235px;
        height: 125px;
      }
      .packs-bottom{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 24px;
        line-height: 24px;
        padding-top: 19px;
        padding-bottom: 5px;
        a.title{
          display: inline-block;
          width: 140px;
          padding-left: 5px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #555;
          font-size: 14px;
          &:hover{
            text-decoration: underline;
          }
        }
        a.packs-btn{
          float: right;
          height: 24px;
          width: 58px;
          padding: 0;
          font-size: 12px;
        }
      }
      
    }
  }

  // @media (max-width:824px){
  //   .packs-container{
  //     .packs-item{
  //       width: 200px;
  //       img{
  //         width: 200%;
  //       }
  //     }
  //   }
  // }
</style>
