// let promise = new Promise((res, rej) => {
//     res( 
//         {user:"amrit", pass:"amritaa1n3"})
        
//     rej("amrit")
// })

// promise.then((data) => {
//     console.log(data);
//     return data;
// }).then((res) => {
//     console.log(res);
// }).catch((error )=> {
//     console.log("error" + error );
// }).finally(()=>
// {
//     console.log("finally")

// })

function roll(num, delay)
{
    return new Promise((res, rej) =>
    {
        setTimeout(()=>{
            console.log("roll is" + num);
            // rej();
            res();
        }, delay)
    })
}

roll(01, 1000).then(()=> {
    roll(02, 2000).then(()=>{
        roll(03, 1000).then(()=>
        console.log("all done")).catch(() => {
            console.log("error")
        })
    }).catch(() => {
        console.log("error")
    })
}).catch(() => {
    console.log("error")
})
