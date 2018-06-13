
import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from '@/store/store.js'
import home from '@/views/home/home'
import {AjaxPlugin, AlertPlugin, LoadingPlugin , ConfirmPlugin} from 'vux'

Vue.use(AjaxPlugin);

Vue.use(AlertPlugin);

Vue.use(LoadingPlugin);

Vue.use(ConfirmPlugin);

//全局ajax拦截器
import interceptors from '@/utils/interceptors.js'



//AjaxPlugin.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//AjaxPlugin.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//在路由去下一个页面前促发 可用来改变去的页面
/*router.beforeEach(function(to,from,next){
  console.log(to);
  if(to.path==='/hehe'){
    router.push({path:'/no2'});
  }
  next();
});*/
/*new Vue(Vue.util.extend({//这样只有一个home
  el:'#app',
  //App,
  //home
  //router,
  //store,
  //template:'<App/>',
  //components:{App}
},home));*/
new Vue({
  el:'#app',
  //App,
  //home
  router,
  store,
  template:'<App/>',
  components:{App}
});






