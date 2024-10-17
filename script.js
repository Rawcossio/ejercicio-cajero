/*
Simular el comportamiento de un cajero electronico con las siguientes funciones
Consultar saldo, retirar dinero, consignar dinero (a cuenta propia) y transferir 
dinero a cualquier cuenta
Condiciones Debe existir una validación de inicio de sesión, solo se podra salir 
del menu si el usuario lo decide
*/
let usuario='admin'
let contrasena='admin'
let inputUsuario=prompt('ingrese su usuario: ')
let inputContrasena
if(usuario==inputUsuario){
    inputContrasena=prompt('ingrese su contraseña: ')
    if(contrasena==inputContrasena){
        console.log('Bienvenido'+inputUsuario)
    }else{
        console.log('Error credenciales')
    }
}else{
    console.log('Usuario no existe en la base de datos')
}


