const log = console.log.bind(console);
import moment from 'moment';
import types from './types';
import Pagination from '../../mixin/Pagination'
import AddInfoDialog from './components/AddInfoDialog';
import FormDialog from './components/FormDialog'

// 初始化函数名必须为:loadData()

export default {
    components:{
        AddInfoDialog,
        FormDialog,
    },
    mixins: [ Pagination ],
    data() {
        return {
            isLoading: false,
            searchInfo: {
                id: '',
                staus: '-1',
                time: '',
                timePeriod: '',
            },
            tableData: [
                {
                    date: 1606658289056,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                    {
                    date: 1606658289056,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                },
                {
                    date: 1606658289056,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                },
                {
                    date: 1606658289056,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }
            ],
            ...types,
        }
    },
    methods: {
        // 时间格式化的函数
        dateFormatter(row, column) {
            if (row[column.property]) {
                // moment 的参数必须为Number
                return moment(Number(row[column.property])).format('YYYY-MM-DD HH:mm:ss');
            }
            return '--'
        },
        loadData() {
            log('加载表格数据的函数');
        },
        onSubmit() {
            log('手动触发查询');
            log('searchInfo: ', this.searchInfo);
            this.loadData();
        },
        handleClick(row) {
            console.log(row);
        },
        vModelEvent() {
            log('添加一条数据信息');
            this.$refs.AddInfoDialog.show();
        },
        addOneTableData() {
            log('添加一条数据信息');
            this.$refs.FormDialog.show();
        },
    },
    mounted() {
        this.loadData();
        log('this.pagination: ', this.pagination);
    },
}