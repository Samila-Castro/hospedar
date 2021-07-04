function validar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    
    if(email == "cliente@gmail.com" && senha == "12345678")
    {
        window.location = "";
    }

    else if(!email && !senha)
    {
        alert("Preencha todos os campos");
    }

     else if(!email)
    {
        alert("Preencha o campo email");
    }
    else if(!senha)
    {
        alert("Preencha o campo senha");
    }
    
    else{
        alert("Email ou senha incorreta. Tente novamente");
    }   
}

