export function Footer(){

    return(
        <>

<footer className="container-fluid bg-dark text-white p-3 mt-5 text-center ">

<div className="row">

    <div className="col-12 col-md-12 text-info">
        <h4>&copy; Fabian Henao</h4>
        <h4>Medellín</h4>
        <h4>Aprendíz SURA</h4>
        <h4>2022</h4>
    </div>
    <div className="row text-center justify-content-center">
    <div className="col-12 col-md-1 border p-1">
        <i className="bi bi-github fs-1 my-2"></i>
    </div>

    <div className="col-12 col-md-1 border p-1  ">
        <i className="bi bi-linkedin text-info fs-1 my-2 "></i>
    </div>
    <div className="col-12 col-md-1 border p-1">
    <i className="bi bi-whatsapp text-success fs-1 my-2"></i>
    </div>    
</div>
</div>
</footer>

        </>
    )

}