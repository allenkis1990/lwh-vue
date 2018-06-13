<template>
  <div>
    store-mutations!
    {{$store.state.name}}
    <input type="text" v-model="userName" />
    <div><button @click="changeName()">changeName</button></div>
  </div>

</template>

<script>
export default {
  data:function(){
    return {
      userName:''
    }
  },
  mounted:function(){

  },
  methods:{
    changeName:function(){

      //console.log(this.$store);
      this.$store.commit('changeName',this.userName);
    }
  }
}
</script>

<style>
</style>
