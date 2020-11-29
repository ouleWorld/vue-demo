<template>
    <el-dialog
        title="提示"
        :visible.sync="visible"
        width="50%"
        class="addInfoDialog">
        <el-form class="formBox" ref="form" :inline="false" :rules="rules" :model="formData" @submit.native.prevent="onSubmit">
            <el-form-item label="日期" required label-width="120px" prop="date">
                <el-date-picker
                    v-model="formData.date"
                    type="datetime"
                    value-format="timestamp"
                    placeholder="选择日期"
                    style="width: 300px">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="姓名" required label-width="120px" prop="name">
                <el-input v-model="formData.name" placeholder="选择姓名" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="省份" required label-width="120px" prop="province">
                <el-input v-model="formData.province" placeholder="选择省份" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="市区" required label-width="120px" prop="city">
                <el-input v-model="formData.city" placeholder="选择市区" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="地址" required label-width="120px" prop="address">
                <el-input v-model="formData.address" placeholder="选择地址" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="邮编" required label-width="120px" prop="zip">
                <el-input v-model="formData.zip" placeholder="选择邮编" style="width: 300px"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
    import _ from 'lodash';
    import rules from './rules';
    const log = console.log.bind(console);

    export default {
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
                rules: rules(this),
                formData: {
                    date: '',
                    name: '',
                    province: '',
                    city: '',
                    address: '',
                    zip: '',
                }
            }
        },
        methods:{
            isValidate() {
                let isValidate = false;
                this.$refs.form.validate(valid => {
                    isValidate = valid;
                })
                return isValidate;
            },
            show() {
                this.visible = true;
                // 如果不进行存在判断, 可能会报错
                this.$refs.form && this.$refs.form.resetFields();
            },
            onSubmit() {
                if (!this.isValidate()) {
                    return;
                }
                const obj = _.cloneDeep(this.tableData);
                obj.push(this.formData)
                log('obj: ', obj);
                this.$emit('tableDataChange', obj);
                this.$message({
                    message: '添加成功!',
                    type: 'success'
                });
                setTimeout(() => {
                    this.visible = false;
                }, 300)
            },
        },

    }
</script>

<style lang="css" rel="stylesheet/css">

</style>