//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

const banco = {
  clientes: arrayCuentas,
  //Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
 // consultarCliente: function (titular) {
  //  let mensajeError =
  //    "No se encontraron coincidencias, por favor verifique los datos ingresados";
    //let clienteEncontrado;
    //for (let i = 0; i < this.clientes.length; i++) {
      //let cliente = this.clientes[i];
      //if (titular === cliente.titularCuenta) {
        //clienteEncontrado = cliente;
      //}
    //}
    //return clienteEncontrado ? clienteEncontrado : mensajeError;
 // },
  deposito: function(nombre,dinero){
    let saldo;
    for (let i = 0; i < this.clientes.length; i++) {
      let cliente = this.clientes[i];
      if (nombre === cliente.titularCuenta) {
        saldo = cliente.saldoEnPesos + dinero;
  }
};
let dinero1= (banco.deposito("Ansel Ardley", 1000))
console.log(dinero1)

//let clienteEncontrado = banco.consultarCliente("Ansel Ardley");
//let clienteEncontrado2 = banco.consultarCliente("leandro");
//console.log(clienteEncontrado);
//console.log(clienteEncontrado2);