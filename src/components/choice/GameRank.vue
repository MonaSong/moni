<template>
  <div class="game-rank clearfix">
    <h4 class="title-underline">game rank</h4>
    <div class="game-container" @mouseleave="_leaveContainer" @mouseenter="_entercontainer">
      <div class="game-item-info clearfix" v-for="(item, $index) in list" @mouseenter="_enter" @mouseleave="_leave">
        <div v-if="$index==0">
          <div class="game-big clearfix" style="display:block" data-index="0">
            <div class="rank-number text-orange">{{$index+1}}</div>
            <div class="game-info">
              <div class="game-img">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="game-name-ranknum">
                <span>{{item.title}}</span>
                <p :style="{backgroundImage: 'url(' + picZan + ')', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat'}">{{item.pointCount}}likes</p>
              </div>
            </div>
            <div class="game-install">
              <a href="javascript:;" class="btn btn-primary">install</a>
            </div>
          </div>
          <div class="game-sm clearfix" style="display:none" data-index="0">
              <div class="rank-number text-orange">{{$index+1}}</div>
              <div class="game-info">
                <div class="game-img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="game-name-ranknum">
                  <span>{{item.title}}</span>
                </div>
                <div class="point-num" :style="{backgroundImage: 'url(' + picZan + ')', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat'}">
                  {{item.pointCount}}likies
                </div>
              </div>
          </div>
        </div>
        <div v-else-if="$index < 3">
          <div class="game-big clearfix" style="display:none">
            <div class="rank-number text-orange">{{$index+1}}</div>
            <div class="game-info">
              <div class="game-img">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="game-name-ranknum">
                <span>{{item.title}}</span>
                <p :style="{backgroundImage: 'url(' + picZan + ')', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat'}">{{item.pointCount}}likes</p>
              </div>
            </div>
            <div class="game-install">
              <a href="javascript:;" class="btn btn-primary">install</a>
            </div>
          </div>
          <div class="game-sm clearfix" style="display:block">
              <div class="rank-number text-orange">{{$index+1}}</div>
              <div class="game-info">
                <div class="game-img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="game-name-ranknum">
                  <span>{{item.title}}</span>
                </div>
                <div class="point-num" :style="{backgroundImage: 'url(' + picZan + ')', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat'}">
                  {{item.pointCount}}likes
                </div>
              </div>
          </div>
        </div>
        <div v-else>
          <div class="game-big clearfix" style="display:none">
            <div class="rank-number">{{$index+1}}</div>
            <div class="game-info">
              <div class="game-img">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="game-name-ranknum">
                <span>{{item.title}}</span>
                <p :style="{backgroundImage: 'url(' + picZan + ')', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat'}">{{item.pointCount}}likes</p>
              </div>
            </div>
            <div class="game-install">
              <a href="javascript:;" class="btn btn-primary">install</a>
            </div>
          </div>
          <div class="game-sm clearfix" style="display:block">
              <div class="rank-number">{{$index+1}}</div>
              <div class="game-info">
                <div class="game-img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="game-name-ranknum">
                  <span>{{item.title}}</span>
                </div>
                <div class="point-num" :style="{backgroundImage: 'url(' + picZan + ')', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat'}">
                  {{item.pointCount}}likes
                </div>
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
  name: 'GameRank',
  data () {
    return {
      list: [
        {imgUrl: pic01, title: 'game name game name game name', pointCount: '23'},
        {imgUrl: pic02, title: '毁灭公爵', pointCount: '20'},
        {imgUrl: pic02, title: 'game name game name game name', pointCount: '12'},
        {imgUrl: pic01, title: 'game name game name game name', pointCount: '12'},
        {imgUrl: pic02, title: 'game name game name game name', pointCount: '12'},
        {imgUrl: pic02, title: 'game name game name game name', pointCount: '12'},
        {imgUrl: pic01, title: 'game name game name game name', pointCount: '12'},
        {imgUrl: pic02, title: 'game name game name game name', pointCount: '12'},
        {imgUrl: pic01, title: 'game name game name game name', pointCount: '12'},
        {imgUrl: pic02, title: '毁灭公爵', pointCount: '12'}
      ],
      picZan: require('$IMG/zan-bg.png')
    }
  },
  methods: {
    _getDom () {
      var firstDom = document.getElementsByClassName('game-item-info')[0]
      var firstBigDom = firstDom.getElementsByClassName('game-big')[0]
      var firstSmDom = firstDom.getElementsByClassName('game-sm')[0]
      return {firstBigDom, firstSmDom}
    },
    _changeStatus (e, status) {
      var curDom = e.currentTarget
      var bigDom = curDom.getElementsByClassName('game-big')[0]
      var smDom = curDom.getElementsByClassName('game-sm')[0]
      switch (status) {
        case 'leave':
          bigDom.style.display = 'none'
          smDom.style.display = 'block'
          break
        case 'enter':
          bigDom.style.display = 'block'
          smDom.style.display = 'none'
          break
      }
    },
    _enter (e) {
      this._changeStatus(e, 'enter')
    },
    _leave (e) {
      this._changeStatus(e, 'leave')
    },
    _leaveContainer (e) {
      var dom = this._getDom()
      dom['firstBigDom'].style.display = 'block'
      dom['firstSmDom'].style.display = 'none'
    },
    _entercontainer (e) {
      var curDom = e.currentTarget
      var dom = this._getDom()
      if (!curDom.getAttribute('data-index')) {
        dom['firstBigDom'].style.display = 'none'
        dom['firstSmDom'].style.display = 'block'
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @rank-title-color:#bbb;
  .game-rank{   
      .game-item-info{
        padding-bottom: 8px;
        .game-big{
          border-bottom: 1px dotted #999;
          padding-bottom: 5px;
          transition: all .2s linear;
          .rank-number{
            float: left;
            width: 30px;
            font-size: 20px;
            line-height: 48px;
            color: #999;
          }
          .game-img{
            float: left;
            width: 48px;
            height: 48px;
            img{
              width: 48px;
              height: 48px;
              border-radius: 8px;
            }
          }
          .game-name-ranknum{
            float: left;
            padding-left: 10px;
            color: #555;
            width: 50px;
            height: 50px;
            overflow: hidden;
            span{
              display: inline-block;
              height: 18px;
              overflow: hidden;
              margin: 0;
              font-size: 12px;
            }
            p{
              height: 20px;
              margin: 0;
              font-size: 12px;
              color: @rank-title-color;
              padding-left: 20px;
              width: 50px;
              height: 30px;
              overflow: hidden;
              line-height: 30px;
            }
          }
          .game-install{
              float: right;
            }
        }
        .game-sm{
          transition: all .2s linear;
          padding-bottom: 5px;
          border-bottom: 1px dotted #999;
          .rank-number{
            width: 30px;
            position: relative;
            float: left;
            line-height: 35px;
            font-size: 20px;
            color: #999;
          }
          .game-img{
            float: left;
            width: 36px;
            height: 36px;
            img{
              width: 36px;
              height: 36px;
              border-radius: 8px;
            }
          }
          .game-name-ranknum{
            float: left;
            padding-left: 10px;
            color: #555;
            span{
              display: inline-block;
              height: 30px;
              width: 50px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin: 0;
              line-height: 35px;
            }
          }
          .point-num{
            float: right;
            color: @rank-title-color;
            line-height: 35px;
            padding-left: 20px;
          }
        }
    }
  }
</style>
