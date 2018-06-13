<template>
  <div>
    store-modules!
    {{$store.state.moduleA.name}}
    {{gettersUserName}}
    <input type="text" v-model="userName" />
    <div><button @click="changeName()">changeName</button></div>

    <div><button @click="clickActions">clickActions</button></div>
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
  computed:{
    gettersUserName:function(){
      return this.$store.getters.initModulesStateName;
    }
  },
  methods:{
    changeName:function(){

      //console.log(this.$store);
      this.$store.commit('changeModuleName',this.userName);
    },
    clickActions:function(){
      this.$store.dispatch('changeModuleName','actions');
    }
  }
}
</script>

<style>
</style>
