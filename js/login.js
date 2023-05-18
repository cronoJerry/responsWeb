


const login = document.querySelector("#login");
login.addEventListener("click",function(e){
    e.preventDefault;
    
    let email = document.querySelector("#firstInput").value;
    localStorage.setItem("id",email);
    let what = localStorage.getItem("id")
})