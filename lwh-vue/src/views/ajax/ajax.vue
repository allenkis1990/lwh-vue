<template>
  <div>
    ajax
  </div>

</template>

<script>
  import request from '@/utils/request.js'

export default {
  data(){
    return {

    }
  },
  mounted:function(){
    //console.log(this.$http,111111);
    var url='/static/data.json',params={name:'11',age:18};
    var headers={aaa:1111};
    //get请求
    request(url,'get',params,headers).then(function(data){
      console.log(data);
    });
    //post请求
    request(url,'post',params).then(function(data){
      console.log(data);
    });
  }
}
</script>

<style scoped>

</style>
