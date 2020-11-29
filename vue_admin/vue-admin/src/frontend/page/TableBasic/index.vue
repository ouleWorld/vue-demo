<template>
    <div class="tableBasic">
        <el-form class="formBox" :inline="true" :model="searchInfo" @submit.native.prevent="onSubmit">
            <el-form-item>
                <el-input v-model="searchInfo.id" placeholder="id" style="width: 120px"></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="status" placeholder="选择状态">
                    <el-option
                            v-for="(value, key) in status"
                            :key="key"
                            :label="value"
                            :value="value">
                        {{ value }}
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-date-picker
                        v-model="searchInfo.time"
                        type="datetime"
                        value-format="timestamp"
                        placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-date-picker
                        v-model="searchInfo.timePeriod"
                        type="datetimerange"
                        range-separator="-"
                        value-format="timestamp"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>

            <!--<el-form-item>-->
            <!--<el-button type="primary" icon="search" native-type="submit" style="width: 140px">查询</el-button>-->
            <!--</el-form-item>-->
            <div class="formBtn">
                <el-button type="primary" icon="search" native-type="submit" style="width: 140px">查询</el-button>
                <el-button type="primary" @click="vModelEvent" style="width: 140px">v-model demo</el-button>
                <el-button type="primary" @click="addOneTableData" style="width: 140px">add table data</el-button>
            </div>
        </el-form>

        <!--el-table-column 使用min-width, 这样就能自适应宽屏幕了-->
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    :formatter="dateFormatter"
                    min-width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    min-width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="省份"
                    min-width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="市区"
                    min-width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    min-width="300">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="邮编"
                    min-width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    min-width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                @size-change="onSizeChange"
                @current-change="onPageChange"
                class="view-pager"
                :current-page.sync="pagination.page"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pagination.size"
                layout="sizes, prev, pager, next"
                :total="pagination.total">
        </el-pagination>

        <AddInfoDialog v-model="tableData" ref="AddInfoDialog"></AddInfoDialog>
        <FormDialog v-model="tableData" ref="FormDialog"></FormDialog>
    </div>
</template>

<script>
    import vm from './vm';
    export default vm;
</script>

<style lang="css" rel="stylesheet/css">

</style>