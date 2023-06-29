const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");
const btn = document.querySelector("button");

pass.addEventListener("input", ()=>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }if(pass.value.length<4){
        str.innerHTML = "weak";
        pass.style.borderColor = "red";
        str.style.color = "red";
        btn.style.backgroundColor = "red";
    }
    else if(pass.value.length >=4 && pass.value.length < 8){
        str.innerHTML = "Intermediate";
        pass.style.borderColor = "yellow";
        str.style.color="yellow";
        btn.style.backgroundColor = "yellow";

    }else if (pass.value.length >=8){
        str.innerHTML = "strong";
        pass.style.borderColor = "green";
        str.style.color = "green";
        btn.style.backgroundColor = "green";

    }
})
