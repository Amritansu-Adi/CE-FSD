function roll(num, delay)
{
    return new Promise((res, rej) =>
    {
        setTimeout(()=>{
            console.log("roll is" + num);
            // rej();
            res(num);
        }, delay)
    })
}
async function getRoll(){
    let roll1 = await roll(12, 1000)
    let roll2 = await roll(09, 2000)
    console.log(roll1)
    console.log(roll2)


}

getRoll();