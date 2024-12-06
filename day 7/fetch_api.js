function getdata() {
    fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then(response => {
            response.forEach((data) => {
                const parent = document.createElement("div");
                const name = document.createElement("p");
                const imag = document.createElement("img");

                imag.src = data.avatar_url; 
                name.innerHTML = data.login; 
                parent.appendChild(imag); 
                parent.appendChild(name); 
                document.body.appendChild(parent); 

                document.querySelector("button").style.display = none;
            });
        });
}