

function Strength(password){
    let i = 0;
    if(password.length > 6){
        i++;
    }
    if(password.length >= 10){
        i++;
    }
    if(/[A-Z]/.test(password)){
        i++;
    }
    if(/[0-9]/.test(password)){
        i++;
    }
    if(/[A-Za-z0-8]/.test(password)){
        i++;
    }
    return i;
}



let container = document.querySelector('.container');
document.addEventListener("keyup", function(){
    let password = document.querySelector('#myPassword').value;

    let strength = Strength(password);
    if(strength <= 2){
        container.classList.add('weak');
        container.classList.remove('strong');
    } else if(strength >=2 && strength <=4){
        container.classList.remove('weak');
        container.classList.add('strong');
    } 
})



let Btn = document.querySelector('.btn');
Btn.addEventListener("click", ()=> {
    if(password.value.length <= 0) {
        alert("please enter a password");
    } else if(password.value.length <= 6) {
        alert("passwore is to short");
    }
})


let eyeBtn = document.querySelector(".inputBox .eyeBtn")
let password = document.querySelector(".inputBox input")

eyeBtn.addEventListener('click', ()=>{

    if(password.type  == 'password'){
        password.type = 'text'
        eyeBtn.innerHTML = `<iconify-icon icon="mdi-light:eye" width="24" height="24"></iconify-icon>`
    }else{
        password.type = 'password'
        eyeBtn.innerHTML = `<iconify-icon icon="mdi-light:eye-off" width="24" height="24"></iconify-icon>`
    }
})




