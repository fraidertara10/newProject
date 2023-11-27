function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario.trim() === "" || contrasena.trim() === "") {
        alert("Por favor, complete todos los campos.");
    }else if(contrasena.length<8){
        alert("la contraseña tiene que tener mas de 8 digitos ")
    } 
   
}