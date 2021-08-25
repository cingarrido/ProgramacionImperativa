console.log(!true)
console.log(!false)
console.log(!!false)
console.log(!!true)
console.log(!1)
console.log(!!1)
console.log(!0)
console.log(!!0)
console.log(!!"")
let x=5
let y=9
console.log(x<10 && x!==5,
x>9|| x===5,
!(x===y))*/
 //ejercicio 2//
let x=10
let y="a"
console.log(y==="b"||x>=10)
let x =3
let y=8
console.log(!(x=="3"|| x===y)&&!(y!==8&&x<=y))
let str=""
let msj="jaja!"
let esGracioso="false"
console.log(!((str||msj)&& esGracioso))*/
//ejercicio 3//
let edad= 13
let altura=1.2
let puedePasar= (edad>12)&&(altura>1.3)
console.log(puedePasar)

let suficienteLuz= false
let esRapido= false
let usarFlash= (suficienteLuz)||(esRapido)
console.log(usarFlash)

let parcial1=4
let parcial2=9
let examenFinal=3
let aprueba= (parcial1>=7 && parcial2>=7)||(examenFinal>=4)
console.log(aprueba)

let tareaRealizada= true
let practicoPiano= true
let deMemoria= false
let mirarTv= (tareaRealizada && practicoPiano && deMemoria)
console.log(mirarTv)
