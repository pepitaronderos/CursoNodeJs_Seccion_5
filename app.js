import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import {
	inquirerMenu,
	pausa,
	leerInput,
	listadoTareasBorrar,
	confirmar,
	mostrarListadoChecklist
} from './helpers/inquirer.js'
import { Tareas } from './models/tareas.js';

const main = async () => {
	let opt = "";
	//Inicializamos tareas
	const tareas = new Tareas();
	const tareasDB = leerDB();

	//Verificamos que el json exista, tomamos esa data y volvemos a carga los datos en el array
	if (tareasDB) {
		tareas.cargarTareasFromArr(tareasDB);
	}

	do {
		//aqui lo que hacemos es guardar en la variable opt el return de inquirerMenu que se usa para mostrar las preguntas en la consola
		opt = await inquirerMenu();

		//Luedo ante la seleccion de cada pregunta ejecutamos un switch
		switch (opt) {
			case "1":
				//Leemos los datos cargados por el user, los validamos, guardamos la tarea en el listado
				const desc = await leerInput("Descripción:");
				tareas.crearTarea(desc);
				break;
			case "2":
				//Mostramos el listado de tareas guardado
				tareas.listadoCompleto();
				break;
			case "3":
				//Mostramos el listado de tareas completadas
				tareas.listarPendientesCompletadas(true);
				break;
			case "4":
				//Mostramos el listado de tareas pendientes
				tareas.listarPendientesCompletadas(false);
				break;
			case "5":
				//Realizamos multiples selecciones de las tareas y las marcamos como completadas
				const ids = await mostrarListadoChecklist(tareas.listadoArray);
				tareas.toggleCompletadas(ids);
				break;
			case "6":
				//Borramos una tarea de la lista
				const id = await listadoTareasBorrar(tareas.listadoArray); //Retornamos el id de la tarea seleccionada
				if (id !== "0") {
					const ok = await confirmar("¿Está seguro?"); //Retornamos la confimacion
					//Si la confirmacion es true entonces llamamos al metodo borrar de la clase tareas y le pasamos el id de la tarea seleccionada para borrarlo
					if (ok) {
						tareas.borrarTarea(id);
						console.log("Tarea borrada correctamente".cyan);
					}
				}
				break;
		}

		//Guardamos el array de tareas en un json
		guardarDB(tareas.listadoArray);

		//ejecutamos la pausa
		await pausa();
	} while (opt !== "0"); //mientras opt no sea cero se ejecuta
};

main();