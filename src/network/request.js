import axios from 'axios';
export function request(config){

  const instance =axios.create({
      baseURL:'http://152.136.185.210:7878/api/m5',
      timeout:5000,
    });
  //2.axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    return config //拦截之后要发送出去
  },err =>{
    console.log(err);
  });

  instance.interceptors.response.use(res =>{
    //响应的结果
    return res.data //拦截之后放行
  },err =>{
    //失败的结果
  })

  //3.发送真正的网络请求
  return instance(config);
}