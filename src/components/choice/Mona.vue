<template>
  <div class="content">
      <div class="header">
          <img src="" alt="xx">
          <ul class="list">
            <li v-for='aa in aaa' :key='aa.id' @mouseenter='enter()' @mouseleave='out()' >
                {{aa.name}}
                <ul v-show='aa.isshow'  >
                  <li v-for='aa in aa.children' :key='aa.id'>
                    {{aa.name}}
                  </li>
                </ul>
            </li>
          </ul>
          <span class="pn">{{pname}}</span>
      </div>
    </div>
</template>
<script>

export default {
  name: 'Mona',
  data () {
    return {
      oo: false,
      show: false,
      pname: 'xx',
      aaa: [
        {name: '客户管理', link: '/ke'},
        {name: '订单管理', link: '/ding'},
        {name: '工单管理', link: '/gong'},
        {name: '产品管理', link: '', children: [{name: '产品配置', link: '/chanp'}]}
      ]
    }
  },
  created () {
    this.$set(this.aaa[3], 'isshow', false)
    console.log(this.aaa[3].isshow)
  },
  methods: {
    enter () {
      this.$set(this.aaa[3], 'isshow', true)
      console.log(this.aaa[3].isshow)
    },
    out () {
      this.$set(this.aaa[3], 'isshow', false)
      console.log(this.aaa[3].isshow)
    }
  }
}
</script>
