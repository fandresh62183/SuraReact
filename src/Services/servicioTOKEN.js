export async function servicioTOKEN(){

    //uri
    const URI="https://accounts.spotify.com/api/token"

    

    //datos 
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=e67d07832b0d47eea0ebf5b4fdac7f80"
    const DATO3="client_id=20dc15cc17604f38b6cd107e9605e0e0"

    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3

    }


    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;

   return datos
    
}