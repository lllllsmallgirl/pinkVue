import thenFs from 'then-fs'

thenFs.readFile('./files/1.txt','utf-8').then(r1=>{//.then()的链式，只要是promise的实例对象就可以调用.then()方法
    console.log(r1)
    return thenFs.readFile('./files/2.txt','utf-8')
})
.then(r2=>{
    console.log(r2)
    return thenFs.readFile('./files/3.txt','utf-8')
})
.then(r3=>{
    console.log(r3)
})
.catch(err => {//捕获错误 
    console.log(err.message)
})