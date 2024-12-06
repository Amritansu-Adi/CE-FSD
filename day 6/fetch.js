let b = fetch("https://api.github.com/users/krishnaik06")

b.then((data) => {
    console.log(data)
    return data.json();
}).then((data) => {

    console.log(data)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("complete")
})

