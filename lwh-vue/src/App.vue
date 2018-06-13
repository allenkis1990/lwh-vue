<template>
  <div id="app">
    <ul class="aaa">
      <li class="whg"><img src="../src/images/whg.jpg" width='300' height="100"></li>
      <li>
      <li>
        <a href="javascript:void(0)" @click="goPath('/')">/</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="goPath('/no1')">No.1</a>
        <ul>
          <li><a href="javascript:void(0)" @click="goPath('/no1/no1-1')">no.1-1</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:void(0)" @click="goPath('/no2')">No.2</a>
        <ul>
          <li><a href="javascript:void(0)" @click="stateGo('no2-1',{id:new Date().getTime()})">no.2-1</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:void(0)" @click="goPath('/no3')">No.3</a>
        <ul>
          <li><a href="javascript:void(0)" @click="goPath('/no3/no3-1')">no.3-1</a></li>
        </ul>
      </li>

      <li>
        <a href="javascript:void(0)" @click="goPath('/no4')">No.4</a>
        <ul>
          <li><a href="javascript:void(0)" @click="stateQuery('/no4/no4-1/Allen',{id:'queryId12345345'})">no.4-1</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/no3',{id:'no2'})">redirect</a>
      </li>
      <!--hehe haha 都是no3的别名-->
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/hehe')">alias-hehe</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/haha')">alias-haha</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/transition')">transition</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/state')">store-state</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/mutations')">store-mutations</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/getters')">store-getters</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/actions')">store-actions</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/modules')">store-modules</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/ajax')">vux-ajax</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="stateQuery('/dialog')">dialog</a>
      </li>
    </ul>
    <!--<div>
      <group>
        <cell title="title" value="value"></cell>
      </group>
    </div>-->
    <transition name="fuck" appear @after-enter="fn()">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import { Group, Cell } from 'vux'
export default {
  data:function(){
    return {
      a:'allen'
    }
  },

  mounted:function(){
    console.log(1);
    console.log(Vue.util,'1111');
    var obj1={a:1}
    var obj2={b:2}
    var obj3=Vue.util.extend(obj1,obj2);
    console.log(obj3);
    console.log(obj1);//会变
    console.log(obj2);//不变
  },

  methods:{

    fn:function(){
      console.log('动画进入' );
    },

    goPath:function(path){
      this.$router.push({path:path});
    },

    stateGo:function(name,params){

      //name配params
      this.$router.push(
        {
          name:name,params: params?params:{}
        }
      );
    },
    //用query不用再路由的path里加/:id因为生成的是?id=xxx
    stateQuery:function(path,query){
      this.$router.push(
        {
          path:path,query: query?query:{}
        }
      );
    },
    back:function(){
      this.$router.back();
    }

  },
  components:{
    Group,
    Cell
  }
}
</script>

<!--lang="less"一定要加 否则less不生效-->
<style lang="less">
  /*css 和 less都可以引入*/
  @import "./less/index";
  @import "./css/index.css";
  li{list-style-type:none;}
  .fuck-enter,.fuck-leave-active{margin-left:-200px;}
  .fuck-enter-active,.fuck-leave-active{transition:all 1s ease;}
  .shuzi{background-image: url('/static/shuzi.png')}
</style>

