<template>
    <div class="vueOperatorBasic">
        <el-button type="primary" @click="successEvent">通知:成功</el-button>
        <el-button type="primary" @click="errorEvent">通知:失败</el-button>
        <el-button type="primary" @click="sureEvent">弹窗:确认框</el-button>
        <el-button type="primary" @click="routerEvent">路由:路由跳转</el-button>
        <el-button type="primary" @click="copyEvent">功能:点击复制</el-button>

        <el-button type="primary" @click="createForm">跳转: 创建表单</el-button>
        <el-button type="primary" @click="modifyForm">跳转: 修改表单</el-button>
        <el-button type="primary" @click="modifyTableForm">跳转: 修改Table表单</el-button>
    </div>
</template>

<script>
    import vm from './vm';
        export default vm;
</script>

<style lang="css" rel="stylesheet/css">

</style>