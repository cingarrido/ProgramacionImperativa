const alicia = [23, 69, 32];
const bob = [12, 67, 43];
let puntosAlicia=0
let puntosBob=0

function encontrarGanador(a, b) {
    for (let i=0; i< 3; i++){
    if (a[i]>b[i]){ 
        puntosAlicia ++
    }else if(a[i]<b[i]){
        puntosBob ++
    }
    }

    if (puntosAlicia>puntosBob){
        return ("ganadora Alicia")
    }else if (puntosAlicia<puntosBob){
        return ("ganador bob")
    }else{
        return ("empate!")
    }
}


console.log(encontrarGanador(alicia,bob))


