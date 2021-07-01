function validar(){

    var nome = telaCadastro.nome.value;
    var email = telaCadastro.email.value;
    var senha = telaCadastro.senha.value;
    
    if(nome==""){
        alert('Preencha o campo nome.');
        formuser.nome.focus();
        return false;
    }
    if(email=="" || email.indexOf('@')==-1){
        alert('Preencha o campo E-mail com @.');
        formuser.email.focus();
        return false;
    }
    if(senha=="" || senha.length<8){
        alert('Preencha o campo senha com minimo de 8 caracteres');
        formuser.senha.focus();
        return false;
    }
    else if(!email && !senha && !nome) {
        alert("Preencha todos os campos.");
    }

  window.location.href = "/business/login/"
    return false
}
