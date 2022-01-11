
//This solves problem 1
document.querySelector(".btn1").addEventListener("click", 
    function(){
        document.querySelector(".btnMessage").textContent = "I'm right"
    }
)

document.querySelector(".btn2").addEventListener("click", 
    function(){
        document.querySelector(".btnMessage").textContent = "No, i'm right"
    }
)

// This solves problem 2
document.querySelector(".number2").addEventListener("mouseover", 
    function(){
        alert("Hey, I told you not to hover over me");
    }
)

//This solves problem 3 and 4
function checkPassword(){
    let password = document.querySelector(".password").value;
    return password == 12345678 ? true : false;
}

document.querySelector(".form-btn").addEventListener("click",
    function(){
        if(checkPassword()){
            document.querySelector(".formConfirmation").textContent = "Login sucessful, welcome!"
        }else {
            alert("Wrong password, try again homie")
        }
    }
)