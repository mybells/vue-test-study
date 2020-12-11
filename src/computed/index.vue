<template>
<div>
    {{abc}}
    {{eee}}
    {{fff}}
    <el-button @click="click">change</el-button>
</div>
</template>

<script>
export default {
    data() {
        return {
            abc: 123, //模板已关联的数据
            bbb: 345, //模板没关联的数据
        }
    },
    computed: {
        // 不会触发
        ccc() { //模板没关联的数据
            console.log('ccc: 模板没关联的数据,abc:模板已关联的数据')
            return this.abc + 'computed' //模板已关联的数据
        },
        // 不会触发
        ddd() { //模板没关联的数据
            console.log('ddd: 模板没关联的数据,bbb:模板没关联的数据')
            return this.bbb + 'computed' //模板没关联的数据
        },
        // 会触发
        eee() { //模板已关联的数据
            console.log('eee: 模板已关联的数据,abc:模板已关联的数据')
            return this.abc + 'eee' //模板已关联的数据
        },
        // 会触发
        fff() { //模板已关联的数据
            console.log('fff: 模板已关联的数据,bbb:模板没关联的数据')
            return this.bbb + 'fff' //模板没关联的数据
        }
    },
    methods: {
        click() {
            this.abc = 222;
            this.bbb = 555;
        }
    }

}
</script>

<style scoped>

</style>
