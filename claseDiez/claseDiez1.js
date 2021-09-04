let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]
function convertirAMayusculas(array){
    for(let i=0; i<array.lenght; i++){
        array[i] = array[i].toUpperCase()
    }
    return array
  }
  
  console.log (convertirAMayusculas(peliculas))
