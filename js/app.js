document.addEventListener('DOMContentLoaded',function(){
    let token = localStorage.getItem('token')

    if(!token){
        window.location.assign("http://127.0.0.1:5500/pages/login.html");
    }
})