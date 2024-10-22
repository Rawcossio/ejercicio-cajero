/*
Simular el comportamiento de un cajero electronico con las siguientes funciones
Consultar saldo, retirar dinero, consignar dinero (a cuenta propia) y transferir 
dinero a cualquier cuenta
Condiciones Debe existir una validación de inicio de sesión, solo se podra salir 
del menu si el usuario lo decide
*/
let usuario='admin'
let contrasena='admin'
let inputContrasena
let inputUsuario
let saldoCuenta=10000000


function consultarSaldo(){
console.log('su saldo es:'+saldoCuenta)
}
function retirarDinero(){
    let valorTransaccion=Number(prompt('Ingrese el monto que desea retirar:'))
    if(valorTransaccion<10000){
        console.log('No se retirar menos de 10mil')
    }else if(valorTransaccion>saldoCuenta){
        console.log('Fondos insuficientes')
    }else{
        console.log('Hizo un retito por valor de:'+valorTransaccion)
        saldoCuenta-=valorTransaccion
        console.log('su nuevo saldo es:'+saldoCuenta)
    }  
}
function transferirDinero(){
    let valorTransaccion=Number(prompt('Ingrese el monto a transferir:'))
    if(valorTransaccion>saldoCuenta){
        console.log('Fondos inssuficientes')
    }else{
        console.log('Hizo una transaccion por valor de:'+valorTransaccion)
        saldoCuenta-=valorTransaccion
        console.log('su nuevo saldo es:'+saldoCuenta)
    } 
}
function consignarDinero(){
    let valorTransaccion=Number(prompt('Ingrese el monto a consignar:'))
    if(valorTransaccion<10000){
        console.log('No se puede consignar menos de 10mil')
    }else{
        console.log('Hizo una consignación por valor de:'+valorTransaccion)
        saldoCuenta-=valorTransaccion
        console.log('su nuevo saldo es:'+saldoCuenta)
    } 
}

inputUsuario=prompt('ingrese su usuario: ')
if(usuario==inputUsuario){
    inputContrasena=prompt('ingrese su contraseña: ')
    if(contrasena==inputContrasena){
        console.log('Bienvenido'+inputUsuario)
        let repetir=true
        while(repetir){
            let opcion=Number(prompt('Seleccione:\n1-Consultar Saldo\n2-Retirar Dinero\n3-Transferir\n4-Consignar\n5-Salir'))
            switch(opcion){
                case 1:
                    consultarSaldo()
                break
                case 2:
                    retirarDinero()
                break
                case 3:
                    transferirDinero()
                break
                case 4:
                    consignarDinero()
                break
                case 5:
                    repetir=false
                break
            }
        }
    }else{
        console.log('Error credenciales')
    }
}else{
    console.log('Usuario no existe en la base de datos')
}


