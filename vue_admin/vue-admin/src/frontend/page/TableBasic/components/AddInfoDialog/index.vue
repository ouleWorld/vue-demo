<template>
    <el-dialog
        title="提示"
        :visible.sync="visible"
        width="30%"
        class="addInfoDialog">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取 消</el-button>
            <el-button type="primary" @click="sureEvent">确 定</el-button>
          </span>
    </el-dialog>
</template>

<script>
    import _ from 'lodash'

    export default {
        // v-model 的实现方式
        model: {
            event: 'tableDataChange',
            prop: 'tableData',
        },
        props: {
            tableData: {},
        },
        data() {
            return {
                visible: false,
            }
        },
        methods:{
            show() {
                this.visible = true;
            },
            sureEvent() {
                const obj = _.cloneDeep(this.tableData);
                obj.push({
                    date: new Date().valueOf(),
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                })
                this.$emit('tableDataChange', obj);
                this.visible = false;
            }
        },

    }
</script>

<style lang="css" rel="stylesheet/css">

</style>