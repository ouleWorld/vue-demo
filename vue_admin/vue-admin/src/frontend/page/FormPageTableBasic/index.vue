<template>
    <el-form class="formBox" ref="form" :inline="false" :rules="rules" :model="formData" @submit.native.prevent="onSubmit">
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
        <el-form-item label="家庭成员" required label-width="120px" prop="info">
            <template>
                <el-table :data="formData.info" border style="width: 100%">
                    <el-table-column label="姓名" min-width="120">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.name" placeholder="请输入姓名" style="width: 300px"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="性别" min-width="120">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.sex" placeholder="请输入性别" style="width: 300px"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="出生时间" min-width="120">
                        <template slot-scope="scope">
                            <el-date-picker
                                v-model="scope.row.time"
                                type="datetime"
                                value-format="timestamp"
                                placeholder="选择日期">
                            </el-date-picker>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="table-bottom">
                    <el-button type="primary" @click="addInfoData">add</el-button>
                </div>
            </template>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import vm from './vm';
    export default vm;
</script>

<style lang="css" rel="stylesheet/css">
    .table-bottom {
        height: 65px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-left: 1px solid #EBEEF5;
        border-right: 1px solid #EBEEF5;
        border-bottom: 1px solid #EBEEF5;
    }

    .el-form-item__error {
        white-space: pre-line;
        height: auto;
        position: relative;
    }
</style>