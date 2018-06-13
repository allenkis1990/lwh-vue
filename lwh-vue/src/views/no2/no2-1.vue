<template>
  <div>no.2-1 <span>{{$route.params.id}}</span></div>
</template>

<script>
export default {
  methods:{
    goPath:function(path){
      this.$router.push({path:path});
    }
  }
}
</script>

<style>
</style>
