/* ME RE COSTO HACER QUE FUNCIONE!!!!!!
recien pude hacerlo funcionar cuando cambie todos los LET por VAR.... 
error de principiante*/

alert(    "Entrega 01 - Calculador de IVA simplificado"   )
var proceed = confirm("Vas a pagar el IVA sobre tu producto?");
if (proceed) {
    var  precio = parseInt (prompt ("Ingresar el monto de tu producto"));
    var  cuotas = parseInt (prompt ("indica cantidad de cuotas"));
    var calculadora  = precio / cuotas*1.21
    } 
else {
    var  precio = parseInt (prompt ("Ingresar el monto de tu productoo"));
    var  cuotas = parseInt (prompt ("indica cantidad de cuotass"));
    var calculadora  = precio/cuotas
}

alert(calculadora)
console.log(calculadora);
alert(    "Ignacio Casco - Comisión 30335 - Javascript"  )