const rf=require('rimraf');
const path=require('path');
const fs=require('fs');
rf(path.join(__dirname,'aaa'),function(err,stat){
  if(err){
    throw err;
  }
  console.log('删除成功');
});

/*fs.mkdir(path.join(__dirname,'aaa'),function(err){
  if(err){
    throw err;
  }
});*/

/*fs.stat(path.join(__dirname,'aaa'),function(err,stat){
  if(err){
    throw err;
  }
  console.log(stat.isDirectory());
  console.log(stat.isFile());
});*/
