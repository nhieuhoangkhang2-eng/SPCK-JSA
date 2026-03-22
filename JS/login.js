let form = document.querySelector("form");
let userArray;
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let pass = document.querySelector("#pass").value;

    if (localStorage.getItem("users")) {
        userArray = JSON.parse(localStorage.getItem("users"));
    } else {userArray = []};

    let checkUser =  userArray.find((user) =>{
        if (user.name ===name && user.pass ===pass){
            return true;
        }
        return false;
    });

    if (checkUser) {
        window.location.href = "./indexlogined.html";
    } else {
        alert("Sai tên hoặc mật khẩu");
    }
})