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
        <div>{this.msg}</div>
      )
    }
  }
</script>