const toggle = document.querySelector("#toggle");
const HbackC = document.querySelector("#headerBackground");
toggle.addEventListener("click",function(e){
    e.preventDefault;
    const list = document.querySelector("#landing");
    if(list.style.display === "none"){
        list.style.display = "block";
        HbackC.style.backgroundColor = "rgba(0,0,0,0.8)";
        document.querySelector("#navText").style.display = "none";

    }else{
        list.style.display = "none";
        HbackC.style.backgroundColor = "rgba(0,0,0,0.0)";
        document.querySelector("#navText").style.display = "block";
    }

})
if(localStorage.getItem("id")){
    let email = window.localStorage.getItem("id");
    const welcome = document.querySelector("#welcome");
    welcome.innerHTML = `환영합니다. ${email}님`;
    

}
