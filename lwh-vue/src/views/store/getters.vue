<template>
  <div>
    store-getter!
    原来的$store.state：{{$store.state.name}}
    通过$store.getter改变的：{{userName}}
  </div>

</template>

<script>
export default {
  mounted:function(){

  },
  data(){
    return {
      //userName:''
    }
  },
  computed:{
    //如果通过mutations的方法改变了初始的值那么getter也会改变
    userName:function(){
      return this.$store.getters.initStateName;
    }
  }
}
</script>

<style>
</style>
