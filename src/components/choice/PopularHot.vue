<template>
  <div class="popular-hot ">
    <h4 class="title-underline">
      hot
      <a href="javascript:;">more</a>
    </h4>
    <div class="hot-container clearfix">
      <div v-for="(item, $index) in list" @mouseenter="_popverEnter(item)" :key="$index" @mouseleave="_popoverLeave(item)" ref="hot-item">
        <div class="item">
          <a href="javascript:;" @click="_modalShow($index, item, 'normal')">
            <img :src="item.imgUrl" :alt="item.name" :title="item.name">
            <i class="gift" v-if="item.hasGift" :style="{backgroundImage:'url(' + giftIcon + ')', backgroundRepeat: 'no-repeat'}"></i>
            <i class="ani-fire" v-show="item.fire" :style="{backgroundImage: 'url(' + fireIcon + ')', backgroundRepeat: 'no-repeat', backgroundPosition: '0 0'}"></i>
          </a>
          <div class="item-title">{{item.name}}</div>
          <!--popover-->
          <transition name="fade">
            <div class="popover clearfix" v-show="item.isPopover">
              <div class="popover-title">
                <div class="popver-num">
                  <span>{{item.data.size}}</span>|
                  <span>{{item.data.startNum}}</span>
                </div>
                <h4>{{item.name}}</h4>
              </div>
              <div class="popover-body clearfix">
                <div class="item-des">
                  <p>
                    <strong>brief description ：</strong>{{item.data.des}}</p>
                </div>
                <div class="item-operator clearfix">
                  <div class="qrcode">
                    <img src="" alt="">
                    <p>andriod look at
                      <span class="text-orange">welfare</span>look at</p>
                  </div>
                  <div class="operator-btn">
                    <a href="javascript:;" class="btn btn-primary">install</a>
                    <a href="javascript:;" class="btn btn-orange" v-if="item.hasGift" @click="_modalShow($index, item, 'gift')">get gift</a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  
    <!--modal-->
    <transition name="fade">
      <div class="modal" v-if="isShowModal">
        <div class="modal-container">
          <div class="modal-backdrop" @click="_modalFade"></div>
          <div class="modal-content">
            <div class="modal-title clearfix">
              <div class="modal-top-left">
                <img :src="modalInfo.imgUrl" alt="">
              </div>
              <div class="modal-top-right">
                <h4>{{modalInfo.name}}</h4>
                <p>{{modalInfo.data.des}}</p>
                <div class="operator-btn">
                  <div class="btn btn-primary">install</div>
                  <div class="btn btn-orange" v-if="modalInfo.hasGift" @click="_backToGift">get gift</div>
                </div>
              </div>
              <div class="modal-close" @click="_modalFade">&times;</div>
            </div>
            <div class="modal-body">
              <transition name="fade">
                <div>
                  <div class="modal-body-left" v-if="!isShowGift">
                    <h4>application screen image</h4>
                    <div class="img-box">
                      <img :src="modalInfo.imgUrl" alt="">
                      <img :src="modalInfo.imgUrl" alt="">
                      <img :src="modalInfo.imgUrl" alt="">
                    </div>
                    <h4>application description</h4>
                    <div class="app-des">
                      <p>{{modalInfo.data.des}}</p>
                    </div>
                  </div>
                  <div class="modal-body-left" v-if="isShowGift">
                    <h4 :style="{backgroundImage: 'url(' + backToInfoIcon + ')', backgroundRepeat:'no-repeat', paddingLeft: '15px', backgroundPosition: 'center left'}" @click="_backToInfo">返回详情</h4>
                    <div class="gift-item clearfix" v-for="(giftItem, $index) in gift" :key="$index">
                      <div class="gift-left clearfix">
                        <div class="gift-date">To：{{giftItem.expiryDate}}</div>
                        <h4 class="title">{{giftItem.name}}</h4>
                        <div class="process-info">
                          over：
                          <span class="process-bar">
                            <b class="process-current" :style="{width: giftItem.surplus}"></b>
                          </span>
                          <small>{{giftItem.surplus}}</small>
                        </div>
                        <div class="gift-content">
                          <strong>gift content：</strong>
                          <p>{{giftItem.info}}</p>
                        </div>
                        <div class="gift-detail-info">
  
                        </div>
  
                      </div>
                      <div class="gift-right">
  
                      </div>
                    </div>
                  </div>
                  <div class="modal-body-right">
                    <h4>application infomation</h4>
                    <div class="app-detail-info">size
                      <strong>{{modalInfo.data.size}}</strong>
                    </div>
                    <div class="app-detail-info">classify
                      <strong>{{modalInfo.data.size}}</strong>
                    </div>
                    <div class="app-detail-info">hot
                      <strong>{{modalInfo.data.size}}</strong>
                    </div>
                    <div class="app-detail-info">version
                      <strong>{{modalInfo.data.size}}</strong>
                    </div>
                    <div class="app-detail-info">update at
                      <strong>{{modalInfo.data.size}}</strong>
                    </div>
                    <div class="modal-qrcode">
                      <img :src="modalInfo.imgUrl" alt="">
                      <p>look at qrcode~</p>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
let pic01 = require('$IMG/001.png')
let pic02 = require('$IMG/002.png')
export default {
  name: 'PopularHot',
  data () {
    return {
      list: [
        {
          isPopover: false,
          imgUrl: pic01,
          name: 'game one game one',
          hasGift: true,
          fire: true,
          data: { size: '1M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' },
          gift: [
            { name: '10.1', expiryDate: '2017-09-13', surplus: '90%', info: 'game desc01' },
            { name: '8.15', expiryDate: '2017-09-23', surplus: '50%', info: 'game desc02' }
          ]
        },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '2M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '3M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '4M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: true, fire: false, data: { size: '5M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '6M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic02, name: 'game one game one', hasGift: false, fire: false, data: { size: '7M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '8M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: true, fire: false, data: { size: '9M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '10M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic02, name: 'game one game one', hasGift: false, fire: false, data: { size: '11M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '12M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: true, fire: false, data: { size: '13M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic02, name: 'game one game one', hasGift: false, fire: false, data: { size: '14M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '15M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '16M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: true, fire: false, data: { size: '17M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '18M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic02, name: 'game one game one', hasGift: false, fire: false, data: { size: '19M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic01, name: 'game one game one', hasGift: false, fire: false, data: { size: '20M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } },
        { isPopover: false, imgUrl: pic02, name: 'game one game onegame one game one', hasGift: false, fire: false, data: { size: '21M', startNum: '23万', qrCode: '', des: 'description：game one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game onegame one game one！' } }
      ],
      backToInfoIcon: require('$IMG/back.jpg'),
      modalInfo: null,
      isShowModal: false,
      isShowGift: false,
      gift: null,
      giftIcon: require('$IMG/gift.png'),
      fireIcon: require('$IMG/img_bg_fire.png')
    }
  },
  created () {
    this.$set(this.list[0], 'isShow', false)
    // console.log(this.list[0].isShow)
    // console.log(this.list[0])
    // console.log(this.list[0])
    // console.log(this.list[0].isShow)
    // console.log(this.aaa[3].isshow)
    // console.log(this.aaa[3])
    // console.log(this.aaa[3].isshow)
  },
  methods: {
    _toggle (event, type, item) {
      switch (event) {
        case 'leave':
          item[type] = false
          break
        case 'enter':
          item[type] = true
          break
      }
    },
    _modalShow (index, item, type) {
      item.isPopover = false
      this.isShowModal = true
      this.modalInfo = item
      this.gift = this.modalInfo.gift
      if (item.hasGift && type === 'gift') {
        this.isShowGift = true
      }
    },
    _modalFade (item) {
      this.isShowModal = false
      this.isShowGift = false
    },
    _popverEnter (item) {
      this._toggle('enter', 'isPopover', item)
    },
    _popoverLeave (item) {
      this._toggle('leave', 'isPopover', item)
    },
    _backToInfo () {
      this.isShowGift = false
    },
    _backToGift () {
      this.isShowGift = true
    }
  }
}
</script>
<style lang="less">
@import '../../assets/style/variable.less';
p {
  font-size: 12px;
  color: @color-dark;
}

.popular-hot {
  .hot-container {
    padding-left: 30px;
    .item {
      position: relative;
      float: left;
      margin-right: 18px;
      width: 64px;
      padding-right: 10px;
      height: 64px;
      margin-bottom: 35px;
      &>a {
        position: relative;
        display: inline-block;
        width: 64px;
        height: 64px;
        border-radius: 10px;
        background-color: @theme-color;
        img {
          width: 64px;
          height: 64px;
          position: relative;
          z-index: 2;
          border-radius: 10px;
        }
        i.gift {
          position: absolute;
          z-index: 3;
          top: 0;
          right: -2px;
          display: inline-block;
          width: 30px;
          height: 28px;
          border-top-right-radius: 10px;
        }
        i.ani-fire {
          width: 100px;
          height: 100px;
          position: absolute;
          left: -13px;
          top: -17px;
          z-index: 1;
          -webkit-animation: ani-two 2s steps(19) infinite;
        }
        @-webkit-keyframes ani-two {
          100% {
            background-position: 0 -1900px
          }
        }
      }
      .item-title {
        width: 64px;
        height: 31px;
        color: @color-dark;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        text-align: center;
      }
      .popover {
        position: absolute;
        top: 0;
        left: 70px;
        width: 250px;
        height: 250px;
        padding: 20px;
        z-index: 100;
        background-color: @white;
        color: @color-dark;
        box-shadow: 0 0 20px @color-dark;
        .popover-title {
          h4 {
            margin: 5px 0;
          }
          .popver-num {
            float: right;
          }
        }
        .popover-body {
          .item-des {
            margin-bottom: 10px;
            font-size: 12px;
            border-bottom: 1px dotted @color-light;
            color: @color-light;
            height: 70px;
            line-height: 20px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          .item-operator {
            .qrcode {
              width: 100px;
              overflow: hidden;
              float: left;
              &>img {
                width: 100px;
                height: 100px;
              }
              p {
                text-align: center;
                font-size: 12px;
                margin: 5px 0;
              }
            }
            .operator-btn {
              float: right;
              width: 90px;
              padding-left: 15px;
              padding-bottom: 10px;
              background-color: @background-color;
              .btn {
                width: 60px;
                padding: 8px 8px;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    .modal-container {
      .modal-backdrop {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .7);
        z-index: 8889;
      }
      .modal-content {
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
        .modal-title {
          position: relative;
          padding: 20px 20px 15px 20px;
          border-bottom: 1px solid @border-light;
          .modal-top-left {
            float: left;
            width: 80px;
            position: relative;
            img {
              width: 64px;
              height: 64px;
              border-radius: 8px;
            }
          }
          .modal-top-right {
            width: 370px;
            float: left;
            h4 {
              position: relative;
              top: -5px;
              margin: 0;
              color: @color-dark;
            }
            p {
              margin: 5px 0;
              font-size: 12px;
              color: @color-light;
              height: 15px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .modal-close {
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
        .modal-body {
          margin-top: 30px;
          .modal-body-left {
            float: left;
            position: relative;
            height: 470px;
            width: 588px;
            padding-left: 20px;
            border-right: 1px dashed @color-light;
            &>h4 {
              margin-top: 30px;
              color: @color-dark;
              cursor: pointer;
            }
            .img-box {
              &>img {
                width: 130px;
                height: 220px;
                margin-left: 8px;
                &:first-child {
                  margin-left: 0;
                }
              }
            }
            .app-des {
              p {
                margin: 5px 0;
                font-size: 12px;
                color: @color-light;
              }
            } // 礼物内容
            .gift-item {
              width: 564px;
              height: 140px;
              border: 1px solid @border-light;
              background-color: @red-light;
              margin-bottom: 10px;
              .gift-left {
                float: left;
                width: 323px;
                padding: 10px;
                font-size: 12px;
                .gift-date {
                  float: right;
                  color: @color-light;
                }
                h4 {
                  margin-top: 0;
                  font-size: 14px;
                }
                .process-info {
                  margin-top: 15px;
                  color: @color-light;
                  border-bottom: 1px solid @color-gray;
                  padding-bottom: 15px;
                  small {
                    position: relative;
                    top: 2px;
                  }
                  .process-bar {
                    display: inline-block;
                    position: relative;
                    top: 2px;
                    height: 10px;
                    width: 100px;
                    background-color: @orange-light;
                    .process-current {
                      display: inline-block;
                      position: absolute;
                      left: 0;
                      top: 0;
                      height: 10px;
                      background-color: @orange;
                    }
                  }
                }
                .gift-content {
                  padding-top: 10px;
                }
              }
              .gift-right {
                float: left;
                height: 140px;
                width: 220px;
                border-left: 1px dashed @border-light;
                background-color: @color-blue-light;
              }
            }
          }
          .modal-body-right {
            float: left;
            position: relative;
            width: 180px;
            h4 {
              padding-left: 60px;
              margin-top: 30px;
            }
            .app-detail-info {
              padding-left: 60px;
              padding-top: 15px;
              font-size: 12px;
              color: @color-light;
              strong {
                display: inline-block;
                margin-left: 10px;
                color: @color-dark;
                font-size: 14px;
              }
            }
            .modal-qrcode {
              margin-top: 100px;
              text-align: center;
              &>img {
                width: 105px;
                height: 105px;
              }
              p {
                color: @color-light;
              }
            }
          }
        }
      }
    }
  }
}
</style>
