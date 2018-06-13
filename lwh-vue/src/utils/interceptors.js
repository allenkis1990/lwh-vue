
//拦截器
import { AjaxPlugin } from 'vux'
AjaxPlugin.$http.interceptors.request.use(function (request) {
  //console.log(request.url+'888');
  request.url+='&_q_='+new Date().getTime();
  return request;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
AjaxPlugin.$http.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  console.log(error.response.status,'error');
  if(error.response){
    if(error.response.status===404){
      console.error('请求404');
      return;
    }
    if(error.response.status===401){
      console.error('还没登陆');
      return;
    }
    if(error.response.status===500){
      console.error('服务器出错');
      return;
    }
  }
  return Promise.reject(error);
});
