function logar(){
    let email_correto= "catrina@gmail.com";
    let email= document.getElementById("email");

    let senha_correta= "opaah";
    let senha= document.getElementById("senha");
    if (email.value === email_correto && senha.value === senha_correta) {
        window.location.href="paginaresposta.html";
        
    } else {
        alert("ERROUUU!!!(tente dnv amigo :D)");
    }
}   