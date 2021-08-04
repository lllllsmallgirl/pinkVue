import thenFs from 'then-fs'//引入一个包，可以使用promise异步，.readFile()的返回值就是一个promise实例对象
//.then()方法是promise对象所具有的方法，含义是指定异步操作成功或者失败后的回调函数
thenFs.readFile('./files/1.txt','utf-8').then(r1=>{console.log(r1)})
thenFs.readFile('./files/2.txt','utf-8').then(r2=>{console.log(r2)})
thenFs.readFile('./files/3.txt','utf-8').then(r3=>{console.log(r3)})