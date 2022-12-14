import { Tarea } from './tarea.js';

//Aca creamos la clase Tareas para ir tomando la tarea individual y guardarla en la propiedad _listado
class Tareas {
	constructor() {
		this._listado = {};
	}

	//Lo que estamos haciendo es crear un array con el objeto this._listado
	get listadoArray() {
		const arrayTareas = [];
		Object.keys(this._listado).forEach(key => {
			arrayTareas.push(this._listado[key]);
		});

		return arrayTareas;
	}

	//creamos el metodo e inicializamos el objeto Tarea, luego lo que hacemos es agregarle cada tarea a _listado
	crearTarea(desc) {
		const tarea = new Tarea(desc);
		//El [tarea.id] es lo mismo que hace listado.id, son manera diferentes de acceder a las propiedades del objeto
		this._listado[tarea.id] = tarea;
	}

	//Aca vamos a recibir el array con todos los objetos que recuperamos del json ya paraseado, vamos a iterar por cada uno y agregarlo de nuevo a this._listado
	cargarTareasFromArr(tareas) {
		tareas.forEach(tarea => {
			this._listado[tarea.id] = tarea;
		});
	}

	//Este metodo sirve para mostrar el listado completo de tareas, pendintes y completadas
	listadoCompleto() {
		this.listadoArray.forEach((tarea, i) => {
			const idx = `${i + 1}`.green;
			const { desc, completadoEn } = tarea;
			const estado = completadoEn ? "Completada".green : "Pendiente".red;

			console.log(`${idx}. ${desc} :: ${estado}`);
		});
	}

	//Este metodo nos permite distinguir si las tareas estan pendientes o completdas y listarlas por separado
	listarPendientesCompletadas(completadas) {
		let contador = 0;

		this.listadoArray.forEach((tarea) => {
			const { desc, completadoEn } = tarea;
			const estado = completadoEn ? "Completada".green : "Pendiente".red;

			if (completadas && completadoEn) {
				contador += 1;
				console.log(`${contador.toString().green}. ${desc} :: ${completadoEn.cyan}`);
			} else if (!completadas && !completadoEn) {
				contador += 1;
				console.log(`${contador.toString().green}. ${desc} :: ${estado}`);
			}
		});
	}

	//Este metodo es para borrar un tarea
	borrarTarea(id) {
		if (this._listado[id]) {
			delete this._listado[id];
		}
	}

	//Este metodo es para completar las tareas
	toggleCompletadas(ids) {
		//recorremos el listado de ids de las tareas seleecionadas
		ids.forEach(id => {
			//En cada una obtenemos el id
			const tarea = this._listado[id];
			//Chequeamos que completadoEn no este en null si esta en nullle asigna un valor a completadoEn
			if (!tarea.completadoEn) {
				tarea.completadoEn = new Date().toISOString();
			}
		});

		//aca marcamos como no completados las tareas que no vengan en ids, en este caso recorremos cada una de las tareas guardadas en listadoarray
		this.listadoArray.forEach(tarea => {
			//Evaluamos si el id de la tarea no viuene en el arreglo ids
			if (!ids.includes(tarea.id)) {
				//seteamos cimpledoen en null
				this._listado[tarea.id].completadoEn = null;
			}
		});
	}
}

export {
	Tareas
}