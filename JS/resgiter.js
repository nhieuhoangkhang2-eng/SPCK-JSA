let form = document.querySelector("form");
let checkName = true;
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let pass = document.querySelector("#pass").value;
    if (name.length <3 || name.length > 16) {
        alert("Tên không được quá 16 kí tự hoặc nhỏ hơn 3 kí tự");
        console.log(1)
    } else if (pass.length <8) {
        alert("Mật khẩu có tối thiểu 8 kí tự");
        console.log(2)
    } else {
        if (localStorage.getItem("users")){
            let users = JSON.parse(localStorage.getItem("users"));
            checkName = true;
            users.forEach(userinfo => {
                if (userinfo.name === name){
                    checkName = false;
                }
            });

            if (checkName ==true){
                users.push({name,pass});
                localStorage.setItem("users", JSON.stringify(users))
                location.href = "./login.html";
            } else{
                alert("Tên đã được đăng kí");
            }
        }else{
            localStorage.setItem(
                "users",
                JSON.stringify([{name,pass}]),
            );
            location.href = "./login.html";
        }
    }
});