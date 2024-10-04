//Axios es una biblioteca para hacer solicitudes HTTP (GET, POST, PUT, DELETE, etc.)
import axios from "axios";
//Se importa las interfaces ContestType y BerryFlavor
import { ContestType, BerryFlavor } from "../dto/dto";

//export Hace que la función sea accesible desde otros archivos
//async Hace que la función sea asíncrona
//id: number Hace que la función acepte un argumento id de tipo numerico
//Promise<ContestType> Indica que la función devuleve una promesa, contiene objeto de tipo ContestType
export async function getContestTypeById(id:number): Promise<ContestType> {
    const url = `https://pokeapi.co/api/v2/contest-type/${id}`;
    //await Pausa la ejecución de la función hasta que la promesa que retorna Axios sea resuelta.
    const response = await axios.get<ContestType>(url);

    return response.data;
}

export async function getBerryFlavorById(id:number): Promise<BerryFlavor> {
    const url = `https://pokeapi.co/api/v2/berry-flavor/${id}`;
    const response = await axios.get<BerryFlavor>(url);

    return response.data;
}