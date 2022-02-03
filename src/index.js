
import { leerInput, menuOptions, pausa, listarLugares } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";

const main = async () => {
  const busquedas = new Busquedas();
  let opt;

  do {
    opt = await menuOptions();
    switch (opt) {
      case 1:
        // mostrar mensaje
        const termino = await leerInput("Ciudad: ");
        
        // buscar los lugares
        const lugares = await busquedas.ciudad(termino);

        // seleccionar el lugar
        const id = await listarLugares(lugares)
        console.log(id)
        const lugarSel = lugares.find(l => l.id === id)
        // clima

        // mostrar resultados
        console.log("\nInformacion ciudad:\n");
        console.log("Ciudad:", lugarSel.nombre);
        console.log("Lat:", lugarSel.lnt);
        console.log("Lng:", lugarSel.lng);
        console.log("Temperatura:", lugarSel.lnt);
        console.log("Maxima:", lugarSel.lng);
        console.log("Minima:", lugarSel.lng);
        break;

      case 2:
        break;
      default:
      break;
    }
    console.log(opt);

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};
main();
