/**
 * date 2017-06-08
 * Author Mona
 * Description 工具方法
 */

/**
 * 是否是开发环境
 */
let isDevelopment = true // false
isDevelopment ? '' : console.debug = null

/**
 * 工具方法集合
 */
let ST = (function () {
  let GeneralMethods = {
    /**
     * params array
     */
    sortByAsc: function (arr) {
      let newArr = arr.sort(function (a, b) {
        return a - b
      })
      return newArr
    },
    /**
     * params array
     */
    sortByDesc: function (arr) {
      let newArr = arr.sort(function (a, b) {
        return b - a
      })
      return newArr
    }
  }

  let networkRequest = {
    ws: {
      init: function (options) {
        var _this = this
        _this.options = options
      },
      websocket: function () {
        var _this = this
        if ('WebSocket' in window) {
          var websocket = new WebSocket(_this.options.address)
          websocket.onopen = function () {
            console.debug('打开websocket连接')
          }
          websocket.onmessage = function (event) {
            console.debug('接收服务端发送过来的信息')
            _this.options.onmessage && _this.options.onmessage(event)
          }
          websocket.onerror = function () {
            console.debug('websocket连接错误')
          }
          websocket.onclose = function () {
            console.debug('连接关闭')
          }
        } else {
          alert('当前浏览器不支持WebSocket通讯')
        }
      }
    }
  }
  return {
    methods: GeneralMethods,
    ws: networkRequest.ws
  }
})()

window.ST = ST
