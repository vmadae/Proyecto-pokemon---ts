//Se importa las interfaces Request y Response desde el paquete express (si se quisiera importar todo seria import * as express from express)
//Request representa la peticion que el cliente envía al servidor, contiene información como: parámetros de la url req.params(), cuerpo en una solicitud POST req.body, 
//cabeceras req.headers y query req.query.
//Response representa la respuesta que el servidor envía al cliente, contiene información como: enviar respuesta ak cliente res.send(), res.json() o res.render(), ajustar
//el código de estado HTTP con res.status(), manejar las cabeceras de respuesta res.setHeader().
import { Request, Response } from "express";
//Se importa las funciones getContestTypeById y getBerryFlavorById de contestService
import { getContestTypeById, getBerryFlavorById } from "../services/contestService";

//Se defina la función del controlador
//export permite que la fuinción pueda ser utilizada en otros archivos, async indica que la función es asíncrona 
//Promise<void> la función no devolverá un valor (void), pero como es asíncrona, devuelve una promesa
export async function getCombinedInfo(req:Request, res: Response): Promise<void> {

    //req.params contiene los parámetros de la URL que el cliente envió, utiliza parseInt para convertirlo en entero
    const contestId = parseInt(req.params.contestId);
    const berryId = parseInt(req.params.berryId);

    try {
        //Promise.all ejecuta múltiples promesas en paralelo
        //await espera a que todas las promesas se resuelvan antes de continuar
        const [contestType, berryFlavor] = await Promise.all([
            getContestTypeById(contestId),
            getBerryFlavorById(berryId)
        ]);

        //Se crea objeto de respuesta 
        const combinedData = {
            contestType: contestType.name,
            berryFlavor: berryFlavor.name,
            description: `El concurso tipo "${contestType.name}" está asociado al sabor de baya "${berryFlavor.name}".`
        };

        //Enviar la respuesta al cliente
        res.json(combinedData);

        //Manejo de errores
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });
    }
}