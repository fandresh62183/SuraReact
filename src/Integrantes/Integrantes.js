import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';


export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fbandazpu.jpg?alt=media&token=26700ae9-79d0-4b46-a285-f2487bdbb656" alt="ZPU" className="img-fluid w-100  animate__animated animate__rollIn wow " />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start text-danger'>
                    <h2>ZPU</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
            <div className='col-12 col-md-4 align-self-center border-end text-end text-danger'>
                    <h2>ZPU</h2>
                    <h3>Vocalista</h3>
                </div>
                <div className="col-12 col-md-4 zoom ">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fmaxresdefaultzpuu.jpg?alt=media&token=331ee788-be45-4fc5-b4b8-e62e9439ddee" alt="ZPU" className="img-fluid w-100 rounded animate__animated animate__bounce wow" />
                </div>    
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fmaxresdefaultzpu.jpg?alt=media&token=f1245aa7-8467-47e3-9b08-d783c7144be7" alt="ZPU" className="img-fluid w-100 rounded animate__animated animate__bounce wow" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start text-danger'>
                    <h2>ZPU</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}