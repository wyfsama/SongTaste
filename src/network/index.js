import {request} from './req.js'

// 获取banner
export function _getSwiper(){
    return request("/banner?type=2")
}