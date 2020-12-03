const isArray = s => Object.prototype.toString.call(s) === '[object Array]'

const jugeObjectValue = array => {
    const result = [];
    array.forEach((ele, index) => {
        Object.entries(ele).forEach(([key, value]) => {
            if (!value) {
                result.push({
                    line: index,
                    key,
                })
            }
        })
    })
    return result;
}

const formatErrorInformation = (errorArray, keyValueObject) => {
    let result = '';
    errorArray.forEach(ele => {
        const { line, key } = ele;
        result += `第【${ line + 1 }】行: ${keyValueObject[key]} 不能为空!\n`
    })
    return result;
}

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
        info: [{
            required: false,
            type: 'object',
            validator(rule, value, cb) {
                // if (!value) {
                //     return cb(new Error('右边不能为空'));
                // }
                if (!isArray(value)) {
                    return cb(new Error('info 值必须为一个对象'));
                }
                const array = jugeObjectValue(value);
                if (array.length !== 0) {
                    const keyValueObject = {
                        name: '名字',
                        sex: '性别',
                        time: '时间',
                    }
                    const prompt = formatErrorInformation(array, keyValueObject);
                    return cb(new Error(prompt));
                }
                cb();
            },
            trigger: 'change',
        }]
    }
}