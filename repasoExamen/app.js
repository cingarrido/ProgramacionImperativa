const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);

/*  =================================================================
Te proveemos la siguiente plantilla que tiene tres partes:
 - Array de objetos que está colapsado aquí debajo.
 - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
 - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados 
================================================================= */

const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 42700,
  },
  {
    id: 2,
    propietarios: "Dueñas: Martinez Hnas",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 29000,
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    ambientes: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 3,
    precioAlquiler: 53000,
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    ambientes: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 17900,
  },
  {
    id: 5,
    propietarios: "Dueño: Pablo Groming",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 24100,
  },
  {
    id: 6,
    propietarios: "Dueñas: Martinez Hnas",
    ambientes: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 46700,
  },
  {
    id: 7,
    propietarios: "Dueño: Alberto Direck",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 37000,
  },
  {
    id: 8,
    propietarios: "Dueña: Maria Gonzalez",
    ambientes: 4,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 5,
    precioAlquiler: 84000,
  },
  {
    id: 9,
    propietarios: "Dueña: Martina García",
    ambientes: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 5,
    precioAlquiler: 74000,
  },
  {
    id: 10,
    propietarios: "Dueña: Cristina Foldati",
    ambientes: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 55800,
  },
  {
    id: 11,
    propietarios: "Dueño: Ramiro Orwel",
    ambientes: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 68000,
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Goldstein",
    ambientes: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 63000,
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 43200,
  },
  {
    id: 14,
    propietarios: "Dueños: Ramirez y asociados",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 40000,
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 21500,
  },
  {
    id: 16,
    propietarios: "Dueñas: Olga Fernandez y Victoria Paz",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 28000,
  },
  {
    id: 17,
    propietarios: "Dueños: Ramirez y asociados",
    ambientes: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 23000,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const inmobiliaria = {
  // A
  departamentos: departamentos,
  // B. Agregar un método listarDepartamentos que reciba como parámetro un array de departamentos y los imprima por consola.
  // “id: 2, precio $ 7500, está Disponible, 4 ambientes, máximo 3 personas, acepta mascotas, propietarios: dueña: Laura Gutierrez”
  listarDepartamentos: function (arrayDeptos) {
    for (let i = 0; i < arrayDeptos.length; i++) {
      let disponibilidad = arrayDeptos[i].disponible
        ? "Disponible"
        : "Alquilado";
      let mascotas = arrayDeptos[i].aceptaMascotas ? "acepta" : "no acepta";
      console.log(
        `id: ${arrayDeptos[i].id}, precio $${arrayDeptos[i].precioAlquiler}, está ${disponibilidad}, ${arrayDeptos[i].ambientes} ambientes, máximo ${arrayDeptos[i].cantidadPersonas} personas, ${mascotas} mascotas, propietarios: ${arrayDeptos[i].propietarios}`
      );
    }
  },
  // C. Agregar un método departamentosDisponibles que permita consultar disponibilidad, es decir, que devuelva una lista de los departamentos disponibles.
  departamentosDisponibles: function () {
    let disponibles = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].disponible) {
        disponibles.push(this.departamentos[i]);
      }
    }
    return disponibles;
  },
  // D. Agregar un método buscarPorId que permita buscar el departamento en función de su identificador.
  // Este método debe devolver un departamento en caso de encontrar el identificador.
  buscarPorId: function (id) {
    for (let i = 0; i < this.departamentos.length; i++) {
      if (id === this.departamentos[i].id) {
        return this.departamentos[i];
      }
    }
  },
  // E. Agregar un método buscarPorPrecio que permita filtrar los departamentos disponibles, siempre y cuando el precio sea menor o igual al precio enviado como argumento.
  // Este método debe usar departamentosDiponibles.
  // Este método debe devolver una lista de departamentos.
  buscarPorPrecio: function (precio) {
    let disponibles = this.departamentosDisponibles();
    let arrayResultado = [];
    for (let i = 0; i < disponibles.length; i++) {
      if (disponibles[i].precioAlquiler <= precio) {
        arrayResultado.push(disponibles[i]);
      }
    }
    return arrayResultado;
  },
  // F.Agregar un método precioConImpuesto que permita realizar un incremento del precioAlquiler a todos los departamentos, tanto disponibles como no disponibles, según un porcentaje que se envía como argumento al momento de la invocación del método.
  // ejemplo : PrecioConImpuesto(10), deberá incrementar el precioAlquiler de Todos los departamentos un 10%
  precioConImpuesto: function (porcentaje) {
    let aux = porcentaje / 100 + 1;
    for (let i = 0; i < this.departamentos.length; i++) {
      this.departamentos[i].precioAlquiler *= aux;
    }
    return this.departamentos;
  },
  // G. Agregar un método simplificarPropietarios que permita modificar los textos de la propiedad propietarios para que en lugar de decir “Dueños: ….”, “Dueña: ….”, etc. diga “Prop.: ….”
  // ejemplo : "Dueños: Martín Gutierrez y José Torres" pasará a ser "Prop.: Martín Gutierrez y José Torres"
  simplificarPropietarios: function () {
    for (let i = 0; i < this.departamentos.length; i++) {
      let propietarios = this.departamentos[i].propietarios;
      let desde = propietarios.indexOf(":");
      let soloPropietarios = propietarios.slice(desde);
      this.departamentos[i].propietarios = "Prop." + soloPropietarios;
    }
    return this.departamentos;
  },
};

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());
console.log(o);
console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
console.log(inmobiliaria.buscarPorId(10));
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.buscarPorPrecio(25000));
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.precioConImpuesto(15));
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.simplificarPropietarios());
console.log(o);
