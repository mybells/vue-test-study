<template>
<div>
    <div>{{form.x}}</div>
    <div>{{form.y}}</div>
    <div>{{form.z}}</div>
    <div>formTemp: {{formTemp}}</div>
    <div>formy: {{formy}}</div>
    <div>formz: {{formz}}</div>
    <el-button type="primary" @click="change">forceUpdatechild</el-button>
</div>
</template>

<script>
export default {
    props: {
        form: {
            type: Object,
            default: () => {}
        },
        formy: {
          type: String,
          default:''
        },
        formz: {
          type: String,
          default:''
        }
    },
    computed: {
      formTemp() {
        return JSON.stringify(this.form);
      }
    },
    watch: {
      form: {
        deep: true,
        handler(val) {
        }
      }
    },
    methods: {
      change() {
        this.$forceUpdate()
      }
    },
}
</script>

<style scoped>

</style>
