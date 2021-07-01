function validar(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(email == "empresa@gmail.com" && senha == "123456978")  window.locatio = "";
    
    else if(!email && !senha) alert("Preencha todos os campos");
    
     else if(!email) alert("Preencha o campo email");
    
    else if(!senha) alert("Preencha o campo senha");
    
    else alert("Email ou senha incorreta. Tente novamente");
       
}

