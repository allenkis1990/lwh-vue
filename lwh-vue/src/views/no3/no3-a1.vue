<template>
  <div>
    <div>no3-a1</div>
    <!--<router-view></router-view>-->
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
