/* const mostrarMenu = () => {
	return new Promise((resolve, reject) => {
		console.clear();
		console.log("=================================".brightCyan);
		console.log("     Seleccione una opción".brightCyan);
		console.log("=================================\n".brightCyan);
		console.log(`${"1.".red} Crear tarea`);
		console.log(`${"2.".red} Listar tareas`);
		console.log(`${"3.".red} Listar tareas completadas`);
		console.log(`${"4.".red} Listar tareas pendientes`);
		console.log(`${"5.".red} Completar tarea(s)`);
		console.log(`${"6.".red} Borrar tarea`);
		console.log(`${"0.".red} Salir \n`);

		//El readline y el stdin stdout ya viene con node
		const readline = require("readline").createInterface({
			input: process.stdin,
			output: process.stdout
		});

		//El question es para mostrarte alguna informacion al usuario
		readline.question("Seleccione una opción:", (opt) => {
			readline.close();
			resolve(opt);
		});
	});
};

const pausa = () => {
	return new Promise((resolve, reject) => {
		//El readline y el stdin stdout ya viene con node
		const readline = require("readline").createInterface({
			input: process.stdin,
			output: process.stdout
		});

		//El question es para mostrarte alguna informacion al usuario
		readline.question("Presione ENTER para continuar:", () => {
			readline.close();
			resolve();
		});
	});
};

//Se exporta como un objeto porque es posible que tenga muchas funciones adentro de mostraMenu
module.exports = { mostrarMenu, pausa }; */