<template>
  <div>
    store-actions!
    {{$store.state.name}}
    <div><button @click="changeName()">changeName</button></div>
  </div>

</template>

<script>
export default {
  mounted:function(){
    //var a=this.$store.dispatch('getName');
    this.$store.dispatch('getName').then(function(data){
      console.log(data);
    });
    //console.log(a);
  },
  methods:{
    changeName:function(){
      //console.log(this.$store);
      this.$store.dispatch('changeName','actions');
    }
  }
}
</script>

<style>
</style>
