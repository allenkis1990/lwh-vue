export const mutations={
  //第一个参数state是固定store里的state  第二个开始才是真正的传参
  changeModuleName:function(state,name){
    state.name=name;
  }
}
