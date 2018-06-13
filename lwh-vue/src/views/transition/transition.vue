<template>
  <div>
    <div>transition!</div>
    <transition name="fuck">
      <div class="main" v-show="show"></div>
    </transition>
    <button @click="show=!show">click</button>
  </div>

</template>

<script>
export default {
  data(){
    return {
      show:true
    }
  }
}
</script>

<style scoped>
  .main{width:200px;height:200px;background:red;}
  .fuck-enter,.fuck-leave-active{margin-left:-200px;}
  .fuck-enter-active,.fuck-leave-active{transition:all 1s ease;}
</style>
