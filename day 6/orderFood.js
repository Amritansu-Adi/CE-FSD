function orderFood(item, time){
    return new Promise((res, rej) =>
    {
        setTimeout(() => {
            res(item)
        }, time)
    })
}

async function call(){
    let f1 = await orderFood("rajma", 1000)
    console.log(f1)
}

call()

orderFood("chole", 2000).then((ret)=>
{
    console.log(ret)
})

