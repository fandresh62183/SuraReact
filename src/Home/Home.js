import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

export function Home(){

    let descripcionBanda="Su primer grupo fue Muerte Acústica (que más tarde pasaría a llamarse Magnatiz) allá por los años 1994 y 1995. En 1997, junto a Muerte Acústica, sacó su primera maqueta titulada Las rimas escritas benditas, y en el 98 la segunda llamada MAnada vamos A ,Años más tarde, aprovechando un cambio de DJ en el grupo y la experiencia ganada, decidieron cambiar su nombre por Magnatiz, nombre con el que sacarían al mercado dos LP, realizando sus respectivas giras. Después de estos lanzamientos el grupo se disuelve y ZPU continúa su trabajo en solitario."
    return(
        <>
           <div className="banner">

           </div>
           <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">ZPU</h1>
                    <p className='text-center'>{descripcionBanda}</p>
                </div>
            </div>
           </div>

        <div>
            <SubMenu></SubMenu>
            <Footer></Footer>
        </div>
        



        </>
    )

}