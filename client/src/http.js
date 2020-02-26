import axios from 'axios'
import { Message} from 'element-ui';
import {startLoading, endLoading} from './lib/loadingFuncs'
import router from './router'

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
    // 加载
    startLoading()
    if (localStorage.eleToken)
        config.headers.Authorization = localStorage.eleToken
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
    endLoading()
    return response
}, error => {
    // 错误提醒
    endLoading()
    Message.error(error.response.data)

    const { status } = error.response
    if (status == 401) {
        Message.error('token值无效，请重新登录')
        // 清除token
        localStorage.removeItem('eleToken')

        // 页面跳转
        router.push('/login')
    }

    return Promise.reject(error)
})

export default axios