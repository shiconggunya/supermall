//封装首页用到的网络请求
import {request} from './request'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata',
  })
}

//首页请求商品列表
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })

}