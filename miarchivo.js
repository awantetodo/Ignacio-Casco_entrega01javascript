/* ME RE COSTO HACER QUE FUNCIONE!!!!!!
recien pude hacerlo funcionar cuando cambie todos los LET por VAR.... 
error de principiante*/

function Alumno(){
    alert(    "Entrega 01 - Calculador de IVA simplificado"   );
}
Alumno();


let proceed = confirm("Vas a pagar el IVA sobre tu producto?");

if (proceed) {
    var  precio = parseInt (prompt ("Ingresar el monto de tu producto"));
    var  cuotas = parseInt (prompt ("indica cantidad de cuotas"));
    var iva = 1.21
    var calculadora  = precio / cuotas * iva
    } 

else {
    var  precio = parseInt (prompt ("Ingresar el monto de tu productoo"));
    var  cuotas = parseInt (prompt ("indica cantidad de cuotass"));;
    var calculadora  = precio/cuotas
}

alert(calculadora);
console.log(calculadora);

function Adios(){
    alert(    "chau!"   );
}

Adios();







