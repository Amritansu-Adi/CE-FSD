let curr1 = document.querySelector("#currency1")
let curr2 = document.querySelector("#currency2")
let currDrop1 = document.querySelector("#curr1")
let currDrop2 = document.querySelector("#curr2")
let rates = {}

API()

async function API(){
    await fetch("https://api.exchangerate-api.com/v4/latest/USD").then(
        (response) => {
            data =  response.json();
            return data;
        }).then((data) => {
            console.log(data);
            rates = data.rates;
        })
        .catch((error) => {
        alert("error in fetch", error)
})
}

function convert(){
    let currency1 = curr1.value
    // let currency2 = currDrop1.value
    
    // console.log(data)


    
    
    let rate1 = rates[currDrop1.value]
    
    let result1 = currency1 / rate1;
    let result = result1 * rates[currDrop2.value];
    
    curr2.value = result
    

}