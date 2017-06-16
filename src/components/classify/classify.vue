<template>
  <div class="classify clearfix">
    <div class="classify-box clearfix">
      <div class="classify-bar">
        <div class="classify-title">
          <h4>软件分类</h4>
        </div>
        <div class="classify-info">
          <div class="classify-item" v-for="item in classifyList" @mouseenter="enterBar(item)">
            {{item.title}}
          </div>
        </div>
      </div>
      <div class="classify-container">
        <div class="pane-box">
          <div class="classify-content-pane clearfix" v-for="item in classifyContent">
            <img :src="item.imgUrl" :alt="item.name" :title="item.name">
            <div class="game-info">
              <p>{{item.name}}</p>
              <p>{{item.downloadNum}}亿人下载</p>
              <p>{{item.size}}</p>
              <a href="javascript:;" class="btn btn-default">安装</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let pic01 = require('$IMG/001.png')
let pic02 = require('$IMG/002.png')
export default {
  name: 'classify',
  data () {
    return {
      classifyList: [
        {
          title: '购物',
          data: [
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '视频',
          data: [
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '阅读',
          data: [
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '社交',
          data: [
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '摄影',
          data: [
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '工具',
          data: [
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '生活',
          data: [
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '安全',
          data: [
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '理财',
          data: [
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '办公',
          data: [
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '系统',
          data: [
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic02, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        },
        {
          title: '通讯',
          data: [
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'},
            {imgUrl: pic01, name: 'QQ', downloadNum: '12', size: '38.45M'}
          ]
        }
      ],
      classifyContent: null
    }
  },
  created () {
    this.classifyContent = this.classifyList[0].data
  },
  methods: {
    enterBar (item) {
      this.classifyContent = item.data
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../assets/style/variable.less';
  .classify{
    margin-left: -40px;
    .classify-box{
      padding-top: 20px;
      .classify-bar{
        width: 190px;
        background-color: @theme-color;
        float: left;
        margin-top: -30px;
        .classify-title{
          text-align: center;
          color: @white;
          padding-top: 5px;
          border-bottom: 1px solid @white;
        }
        .classify-item{
          color: @white;
          height: 30px;
          margin-top: 10px;
          text-align: center;
          &:hover{
            cursor: pointer;
            background-color: #408fca;
          }
        }
      }
      .classify-container{
        width: 922px;
        float: right;
        .pane-box{
          display: inline-block;
          border-top: 1px solid @color-light;
          border-left: 1px solid @color-light;
          .classify-content-pane{
            width: 173px;
            height: 100px;
            float: left;
            position: relative;
            border-right: 1px solid @color-light;
            border-bottom: 1px solid @color-light;
            padding-top: 15px;
            padding-left: 10px;
            background-color:@white;
            img{
              float: left;
              width: 64px;
              height: 64px;
              border-radius: 10px;
            }
            .game-info{
              float: left;
              width: 80px;
              padding-left: 10px;
              color: @color-dark;
              p{
                font-size: 12px;
                margin: 5px 0;
              }
              a {
                position: absolute;
                bottom: 10px;
                right: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
