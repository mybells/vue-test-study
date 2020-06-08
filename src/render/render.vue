<script>
// <template>
//   <div>
//     优先显示template中内容，如果没有template则显示render的jsx内容
//   </div>
// </template>
  export default {
    data() {
      return {
        msg:'信息'
      }
    },
    render(h) {
      return (
        <div>
          <div>{this.msg}</div>
          <el-button type="primary" onClick={this.btnc}>给父组件传参</el-button>
        </div>

      )
    },

    methods:{
      btnc() {
        this.$emit('btnClick',this,false);
      }
    }
  }
</script>