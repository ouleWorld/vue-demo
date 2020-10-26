import axios from 'axios'

class Ajax_api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl || 'http://localhost:8000/api/todo'
    }

    get(path) {
        let url = this.baseUrl + path
        return axios.get(url).then(r => r.data)
    }

    post(path, data) {
        let url = this.baseUrl + path
        return axios.post(url, data).then(r => r.data)
    }
}

export default Ajax_api
