import { v4 as uuidv4 } from 'uuid';

//Creamos la clase Tarea, en ella vamos a generar un id unico por cada tarea que el usuario cree, y guandar en cada propiedad la info que el usuario cargo para dicha tarea, posteriormente en Tareas guardaremos cada tarea.
class Tarea {
	constructor(desc) {
		this.id = uuidv4();
		this.desc = desc;
		this.completadoEn = null;
	}
}

export {
	Tarea
}