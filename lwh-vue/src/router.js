import Vue from 'vue'
import vueRouter from 'vue-router'

import home from '@/views/home/home'
import no1 from '@/views/no1/no1'
import no1_1 from '@/views/no1/no1-1'

import no2 from '@/views/no2/no2'
import no2_1 from '@/views/no2/no2-1'

import no3 from '@/views/no3/no3'
import no3_a1 from '@/views/no3/no3-a1'
import no3_a2 from '@/views/no3/no3-a2'
import no3_a3 from '@/views/no3/no3-a3'

import no4 from '@/views/no4/no4'
import no4_index from '@/views/no4/no4-index'
import no4_1 from '@/views/no4/no4-1'

import transition from '@/views/transition/transition'

import store_state from '@/views/store/state'
import store_mutations from '@/views/store/mutations'
import store_getters from '@/views/store/getters'
import store_actions from '@/views/store/actions'
import store_modules from '@/views/store/modules'

import ajax from '@/views/ajax/ajax'

import dialog from '@/views/dialog/dialog'

import view404 from '@/views/404/404'

Vue.use(vueRouter);

export default new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/no1',
      component: no1,
      children:[
        {
          path: 'no1-1',
          component: no1_1
        }
      ]
    },
    {
      path: '/no2',
      component: no2,
      children:[
        {
          path: 'no2-1/:id',
          component: no2_1,
          name:'no2-1',//name 配 params
        }
      ]
    },
    {
      path: '/no3',
      component:no3,
      //redirect:'/',//重定向到首页
      /*redirect:obj=>{
        //解构
        const {hash,params,query}=obj;
        //console.log(hash);
        //console.log(params);
        console.log(query);
        if(query.id==='no1'){
          return '/no1';
        }
        if(query.id==='no2'){
          return '/no2';
        }
        if(query.id==='no3'){
          return '/no3';
        }
        //return '/';
      },*/
      alias:['/hehe','/haha'],
      children:[
        {
          path: 'no3-1',
          components: {
            a1:no3_a1,
            a2:no3_a2,
            a3:no3_a3
          }
        }
      ]
    },
    {
      path: '/no4',
      component:no4,
      children:[
        {path:'/',component:no4_index},
        {path:'no4-1/:userName',component:no4_1}//this.$route.params.userName | this.$route.query.id
      ]
    },
    {
      path: '/transition',
      component:transition
    },
    {
      path: '/state',
      component:store_state
    },
    {
      path: '/mutations',
      component:store_mutations
    },
    {
      path: '/getters',
      component:store_getters
    },
    {
      path: '/actions',
      component:store_actions
    },
    {
      path: '/modules',
      component:store_modules
    },
    {
      path: '/ajax',
      component:ajax
    },
    {
      path: '/dialog',
      component:dialog
    },
    {
      path: '*',
      component:view404
    }
  ]
});






