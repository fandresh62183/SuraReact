import { servicioTOKEN } from "./servicioTOKEN.js"

export async function servicioSporty(){
    const URI="https://api.spotify.com/v1/artists/7F9Bd5X4sxdwWRJVpbfMtb/top-tracks?market=us"
    
    const TOKEN= await servicioTOKEN()

    const PETICION={
        method: "GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos


}