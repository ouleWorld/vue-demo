// import _ from 'lodash';
import rules from './rules';
import FormHelper from '../../mixin/FormHelper'
const log = console.log.bind(console);


export default {
    mixins: [FormHelper],
    data() {
        return {
            visible: false,
            rules: rules(this),
            formData: {
                name: '',
                province: '',
                city: '',
                address: '',
                zip: '',
                info: [],
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
        createResetForm() {
            this.formData = {
                name: '',
                province: '',
                city: '',
                address: '',
                zip: '',
                info: [],
            }
        },
        createFormInterface() {
            log('创建一条表单数据!');
            log('this.formData: ', this.formData);
        },
        modifyFormInterface() {
            log('修改一条表单数据!');
            log('this.formData: ', this.formData);
        },
        modifyResetForm() {
            this.formData = {
                name: 'oulae',
                province: 'hunan',
                city: 'chenzhou',
                address: 'zixing',
                zip: '112243',
            }
        },
        onSubmit() {
            // 提交数据之前需要进行表单校验
            if (!this.isValidate()) {
                return;
            }
            if (this.formType === 'create') {
                // 创建时的接口
                this.createFormInterface();
            } else if (this.formType === 'modify') {
                // 修改时的接口
                this.modifyFormInterface();
            }
        },
        addInfoData() {
            this.formData.info.push({
                name: '',
                sex: '',
                time: '',
            });
        }
    },
    mounted() {
        // 重置表单
        this.$refs.form && this.$refs.form.resetFields();
        // log('this.formType: ', this.formType);
        if (this.formType === 'create') {
            // 创建时的逻辑
            this.createResetForm();
        } else if (this.formType === 'modify') {
            // 修改时的逻辑
            this.modifyResetForm();
        }
    }
}