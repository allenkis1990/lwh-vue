<template>
  <div>
    store-state!
    {{$store.state.name}}
    <button @click="haha">click</button>
  </div>

</template>

<script>
export default {
  mounted:function(){
    console.log(this.$store.state.name);
  },
  methods: {
    haha: function () {
      this.$store.state.name='hahahaha'
    }
  }
}
</script>

<style>
</style>
