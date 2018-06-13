import { AjaxPlugin } from 'vux'

export default function(url,method,data,headers){
  return new Promise(function(resolve,reject){
    if(method==='get'){
      if (data && JSON.stringify(data) !== '{}' && typeof data === 'object') {
        url+='?';
        for(let i in data){
          url+=i+'='+data[i]+'&'
        }
        //去除最后一个&
        var arr=url.split('');
        arr.splice(url.lastIndexOf('&'),1);
        url=arr.join('');
        //console.log(url);
        //console.log(url.lastIndexOf('&'));
      }
    }
    AjaxPlugin.$http({
      url:url,
      method:method,
      data:data,
      headers:headers?headers:undefined
    }).then(function(res){
      if(res){
        if(res.data.status){
          resolve(res.data);
        }else{
          reject(res.data);
        }
      }
    });
  }).catch(function(e){
    console.log(e);
  });
}
