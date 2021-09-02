//ejercicio 1
let arrayCorreosPendientes = [
    'iroman@digitalhouse.com', 'loki%digitalhouse.com', 'loki@digitalhouse.com', 'thanosdigitalhouse.com', 'thanos@digitalhouse.com'
];
/* array de correos admitidos */
let arrayCorreosAdmitidos = [
    'thor@digitalhouse.com',
    'tucuMan@digitalhouse.com',
    'wanda@digitalhouse.com'
];
let arrayCorreosDescartados = [];

function verificarCorreo(arrayCorreo) {
    if (arrayCorreo[0].indexOf("@") !== -1) {
        arrayCorreosAdmitidos.push(arrayCorreo[0])
    } else {
        arrayCorreosDescartados.push(arrayCorreo[0])
    }
}
console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Descartados:" + "longitud de array" + " ---");
console.log(arrayCorreosDescartados);

  