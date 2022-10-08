export function Carrusel(){
    return(

        <>
        
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2FEntrevista-ZPU_2031110514_4790201_1300x731.jpg?alt=media&token=9e4a041a-b585-47df-9c94-a23c1cc29202" height="600" className=" w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzpu.jpg?alt=media&token=9887ff6b-be49-459b-923d-42dfa4f05676" height="600" className=" w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzzpu.jpg?alt=media&token=7ae7131d-5fea-48fc-8524-c2d02804d3d6"  height="600" className=" w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}