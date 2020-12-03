const log = console.log.bind(console);

export default {
    components:{},
    mixins: [],
    data() {
        return {}
    },
    methods: {
        successEvent() {
            // type: success warning error
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        },
        errorEvent() {
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'error'
            });
        },
        sureEvent() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning' // success / info / warning / error
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        routerEvent() {
            this.$router.push('/table/basic')
        },
        copyEvent() {
            log('点击复制!')
        },
        createForm() {
            this.$router.push({
                path: '/create/from/page/basic',
                query: {}
            })
        },
        modifyForm() {
            this.$router.push({
                path: '/modify/from/page/basic',
                query: {}
            })
        },
        modifyTableForm() {
            this.$router.push({
                path: '/create/from/page/table/basic',
                query: {}
            })
        },
    },
    mounted() {
    },
}