function encriptar() { // esta funcion toma los valores ingresados en la caja1 y los encripta
    var texto = document.getElementById("textoEncriptar").value;
    var encriptado = texto.replace(/[eèêëé]/gi,'enter').replace(/[iíìîï]/gi,'imes').replace(/[oóòôõö]/gi,'ober').replace(/[aáàâãä]/gi,'ai').replace(/[uùûüú]/gi,'ufat');
    document.getElementById("textdesencriptar").value = encriptado;
    document.getElementById("imgright").style.display='none';
    document.getElementById("mensajerect1").style.display='none';
    document.getElementById("copiar").style.display='show';
    document.getElementById("copiar").style.display='inherit';
    if (texto == "") { 
        alert(" \uD83D\uDE08 No has ingresado nada para encriptar");
        return true;
    }
}

function desencriptar() {
        var texto2 = document.getElementById("textoEncriptar").value;
        var desencriptar = texto2.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    
        document.getElementById("textdesencriptar").value = desencriptar;
}

function copiar() {
    var paraCopiar = document.getElementById("textdesencriptar");

    paraCopiar.select();
    document.execCommand('copy');
    alert('\uD83D\uDC4D Copiado!');

}
