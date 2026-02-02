let password = document.getElementById("password");
let percent = document.getElementById("percent");
let status = document.getElementById("status");

let len = document.getElementById("len");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let number = document.getElementById("number");
let special = document.getElementById("special");

password.addEventListener("input", () => {
    let v = password.value;
    let score = 0;

    if(v.length >= 8){ score++; len.innerHTML="✔ Minimum 8 characters"; }
    else{ len.innerHTML="❌ Minimum 8 characters"; }

    if(/[A-Z]/.test(v)){ score++; upper.innerHTML="✔ Uppercase letter"; }
    else{ upper.innerHTML="❌ Uppercase letter"; }

    if(/[a-z]/.test(v)){ score++; lower.innerHTML="✔ Lowercase letter"; }
    else{ lower.innerHTML="❌ Lowercase letter"; }

    if(/[0-9]/.test(v)){ score++; number.innerHTML="✔ Number"; }
    else{ number.innerHTML="❌ Number"; }

    if(/[@$!%*?&#]/.test(v)){ score++; special.innerHTML="✔ Special character"; }
    else{ special.innerHTML="❌ Special character"; }

    let strength = Math.round((score / 5) * 100);
    percent.innerText = strength + "%";

    if(score <= 2){
        status.innerText = "😬 Weak Password";
        document.querySelector(".circle").style.borderColor = "red";
    }
    else if(score <= 4){
        status.innerText = "😐 Medium Password";
        document.querySelector(".circle").style.borderColor = "orange";
    }
    else{
        status.innerText = "😎 Strong Password";
        document.querySelector(".circle").style.borderColor = "lime";
    }
});
