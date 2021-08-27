 function puedeSubir(altura, acompaniado) {
    if (altura >= 140 && altura<200){ // siempre volver a llamar a la variable o parametro
        return true;
    } else if ((altura >= 120 && altura < 140) && acompaniado === true) {
        return true;
    } else {
        return false;
    }
    //Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego.//
    let edad=19
    if (edad>=18){
        console.log("Puede pasar")
    }else{
        console.log("No puede pasar")
    }

    let edad = -1 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)


    if(edad<0){
        console.log( "Error, edad inválida. Por favor ingrese un número válido.")
      }else if(edad < 18) {
        console.log("No puede pasar al bar.")
      } else if (edad < 21){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
      } else {
        console.log("Puede pasar al bar y tomar alcohol.")
      }
  
 let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
if (edad < 0) {
  console.log('Error')
} else {
  let x = entrarBar(edad)
  console.log(x)
}
function entrarBar(edad) {
  if (edad < 18) {
    return 'No puede pasar al bar.'
  } else if (edad < 21) {
    return 'Puede pasar al bar, pero no puede tomar alcohol.'
  } else if (edad == 21) {
    return 'Felicitaciones y bienvenido.'
  }else {
    return 'Puede pasar al bar y tomar alcohol.'
  }
}
