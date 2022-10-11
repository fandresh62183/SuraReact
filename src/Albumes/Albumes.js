import { servicioSporty } from "../Services/servicioSporty.js"
import { useState } from "react"
export function Albumes (){

    //declando mi primer useState
    const[canciones,setCanciones]=useState(null)



      servicioSporty()
      .then(function(respuesta){
        setCanciones(respuesta.tracks)

      })
      console.log(canciones)
    return(

        <>
       
        
            <h1>Hola soy albumes y soy un componente</h1>
        </>
    )
}