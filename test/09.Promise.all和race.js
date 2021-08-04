import thenFs from 'then-fs'

const PromiseArr = [
    thenFs.readFile('./files/1.txt','utf-8'),
    thenFs.readFile('./files/2.txt','utf-8'),
    thenFs.readFile('./files/3.txt','utf-8')
]

//Promise.all()等待机制，全部一起
// Promise.all(PromiseArr).then(result => {
//     console.log(result)
// })

//Promise.race()比赛机制，谁快谁就先出来
Promise.race(PromiseArr).then(result => {
    console.log(result)
})