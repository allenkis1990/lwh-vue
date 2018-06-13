<template>
  <div>
    dialog
    <button @click="alert">alert</button>
    <button @click="loading">loading</button>
    <button @click="confirm">confirm</button>
    <button @click="openActionsheet">openActionsheet</button>

    <div><span class="vux-close" style="color:red;"></span></div>
    <actionsheet
      v-model="showActionsheet"
      show-cancel
      :menus="menuList"
      @on-click-menu="clickActionsheet"
      ></actionsheet>

  </div>

</template>

<script>
import { Actionsheet } from 'vux'
export default {
  data(){
    return {
      showActionsheet:false,
      menuList:{menu1:'11',menu2:'22'}
    }
  },
  components:{
    Actionsheet
  },
  methods:{
    openActionsheet:function(){
      this.showActionsheet=true;
    },
    clickActionsheet:function(itemKey,itemValue){
      console.log(itemKey,itemValue);
    },
    alert:function(){
      this.$vux.alert.show({
        title: '提示',
        content: '请长按图片进行保存证书！',
        onShow () {
          console.log(1);
        },
        onHide () {
        }
      })
    },
    loading:function(){
      this.$vux.loading.show({
        text: 'Loading'
      })
    },
    confirm:function(){
      this.$vux.confirm.show({
        // 组件除show外的属性
        onCancel () {
          //console.log(this) // 非当前 vm
          //console.log(_this) // 当前 vm
        },
        onConfirm () {}
      })
    }
  },
  mounted:function(){
  }
}
</script>

<style scoped>

</style>
