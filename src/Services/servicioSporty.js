export async function servicioSporty(){
    const URI="https://api.spotify.com/v1/artists/7F9Bd5X4sxdwWRJVpbfMtb/top-tracks?market=us"


    const TOKEN= "Authorization: Bearer BQD5Pfhesg-807LkR07vWkQpYnSuOkX0MoDx2e-StL6zTPBJkt-nllZCeKZe7B2DDKS00oVH53MEP6vHAaFRN9wig14n_7OHhEjb4QCwdx4N6jxuc1unk5HLuOo1cxji87jJRqKs92_ZQ-79pKNGwTnll2H7yAx88vH3hxuq4_XY18njLEgzlTM_hUcCja5klNo"

    const PETICION={
        method: "GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos


}