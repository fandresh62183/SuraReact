import { servicioSporty } from "../Services/servicioSporty.js"
import { servicioTOKEN } from "../Services/servicioTOKEN.js"

import { useState, useEffect } from "react"


export function Albumes (){

    //declando mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //USANDO EL USEeFFECT
    useEffect(function(){
      servicioSporty()
      .then(function(respuesta){
        setCanciones(respuesta.tracks)
        setCarga(false)
      })
      console.log(canciones)

    },[])
 if (carga==true) {

  return(
    <>
    <h1>Estoy cargando</h1>
    </>
  )
  
 }else{
  return(
    <div className="row row-cols-1 row-cols-md-3 g-3">
    <>
    
  {
                canciones.map(function (cancion) {
                    return (
                        <>
                        
                            <div className="col mt-5">
                                <div className="card h-10  ">
                                    
                                    <img src={cancion.album.images[0].url} className="" alt="foto"/>
                                    <audio controls src={cancion.preview_url}></audio>
                                    <h1 className="text-center">{cancion.name}</h1>
                                    <h1 className="text-center">{cancion.tracks}</h1>
                                    
                                </div>
                            </div>
                        </>
                    )
                })
            }

    </>
    </div>
)

 }
    
      
    
}
