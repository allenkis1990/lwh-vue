<template>
  <div>
    <div>no3</div>
    <router-view name="a1"></router-view>
    <router-view name="a2"></router-view>
    <router-view name="a3"></router-view>
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
