<template>
  <div>
    no4-1
    <div>id:{{$route.query.id}}</div>
  </div>

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
