//=====================================funciones de conteo==============================================================
function obtenerCantidadDeSociesFundadores(socies) {
  let cantidadFundadores = 0;
  for (let i = 0; i < socies.length; i++) {
    if (socies[i].esFundador === true) {
      cantidadFundadores++;
    }
  }
  return cantidadFundadores;
}

function obtenerCantidadDeSocies(socies) {
  return socies.reduce((total, socie) => total + 1, 0);
}

function obtenerCantidadDeCoopesTotales(coopes) {
  return coopes.reduce((total, coop) => total + 1, 0);
}
//=====================================funciones de formato===========================================================


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function capitalizeStrings(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = capitalize(obj[key]);
    }
  }
  return obj;
}
//=========================================================

let masSocies = true;
const coopes = [];
let nuevaCoop = true;


alert(
  "Emulador de sistema de gestión para estadisticas de los usuarios socies de Cooperativas"
);

while (nuevaCoop) {
  let nombre = prompt("Ingrese nombre de la Cooperativa");
  let localidad = prompt("Ingrese la localidad de " + capitalize(nombre));
  let fechaCreacion = prompt(
    "En qué fecha fue creada " +
      capitalize(nombre) +
      " utilice formato DD/MM/AAAA"
  );

  nombre = capitalize(nombre);
  localidad = capitalize(localidad);

  const coop = capitalizeStrings({ nombre, localidad, fechaCreacion });

  coopes.push(coop);

  masSocies = true;

  //-----------reiniciar
  const socies = [];

  while (masSocies) {

    let nombreSocie = prompt("Ingrese nombre del Socie");
    let apellido = prompt("Ingrese el Apellido de " + capitalize(nombreSocie));
    let edad = prompt(
      "Ingrese la edad de " +
        capitalize(nombreSocie) +
        " " +
        capitalize(apellido)
    );
    let sexo = prompt(
      "Ingrese sexo con el que se identifica: " +
        capitalize(nombreSocie) +
        " " +
        capitalize(apellido)
    );

    let esFundador = confirm(
      capitalize(nombreSocie) +
        " " +
        capitalize(apellido) +
        " es socio fundador?"
    );
    let roles = prompt(
      "¿Qué rol cumple " +
        capitalize(nombreSocie) +
        " " +
        capitalize(apellido) +
        "?"
    );

    const socie = capitalizeStrings({
      nombre,
      apellido,
      edad,
      sexo,
      esFundador,
      roles,
    });

  socies.push(socie);

   masSocies = confirm("¿Hay otro socie que ingresar?")

   console.log(socies)
    //--------------------estadisticas en consola---------------------------
    
    console.log(
      "Cantidad de Socies Fundadores:",
      obtenerCantidadDeSociesFundadores(socies)
    );
  
    console.log("Cantidad de Socies:", obtenerCantidadDeSocies(socies));
  }

 
  nuevaCoop = confirm("¿Hay más cooperativas para agregar?");
  //--------------------estadisticas en consola ---------------------------

  console.log(
    "Cantidad de cooperativas totales:",
    obtenerCantidadDeCoopesTotales(coopes)
  );
  
  alert("cerrando la carga de datos de" + `${JSON.stringify(coop.nombre)}`);
  
}
