import fs from 'fs';

const archivo = "./db/data.json"

//Guardamos el array en un json
const guardarDB = (data) => {
	fs.writeFileSync(archivo, JSON.stringify(data));
};

//Leemos el json si existe lo parseamos y retornamos eso
const leerDB = () => {
	if (!fs.existsSync(archivo)) {
		return;
	}

	const info = fs.readFileSync(archivo, { encoding: "utf-8" });
	const data = JSON.parse(info);

	return data;
};

export {
	guardarDB,
	leerDB
}