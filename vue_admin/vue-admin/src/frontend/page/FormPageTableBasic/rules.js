// trigger: blur change
export default ctx => {
    ctx;
    return {
        date: [{
            required: true,
            type: 'number',
            validator(rule, value, cb) {
                if (!value) {
                    return cb(new Error('时间不能为空'));
                }
                cb();
            },
            trigger: 'blur',
        }],
        name: [{
            required: true,
            type: 'string',
            validator(rule, value, cb) {
                if (!value) {
                    return cb(new Error('名字不能为空'));
                }
                cb();
            },
            trigger: 'blur',
        }],
        province: [{
            required: true,
            type: 'string',
            validator(rule, value, cb) {
                if (!value) {
                    return cb(new Error('省份不能为空'));
                }
                cb();
            },
            trigger: 'blur',
        }],
        city: [{
            required: true,
            type: 'string',
            validator(rule, value, cb) {
                if (!value) {
                    return cb(new Error('城市不能为空'));
                }
                cb();
            },
            trigger: 'blur',
        }],
        address: [{
            required: true,
            type: 'string',
            validator(rule, value, cb) {
                if (!value) {
                    return cb(new Error('地址不能为空'));
                }
                cb();
            },
            trigger: 'blur',
        }],
        zip: [{
            required: true,
            type: 'string',
            validator(rule, value, cb) {
                if (!value) {
                    return cb(new Error('右边不能为空'));
                }
                cb();
            },
            trigger: 'blur',
        }],
    }
}