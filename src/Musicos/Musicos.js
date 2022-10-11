
export function Musicos() {
    // un arreglo de objetos es formato comun al consumir un api
    let musicos = [
        {
            nombre: "ZPU",
            rol: "Vocalista y Escritor",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzpu%20cantante.jpg?alt=media&token=253c9797-f7c1-435b-906b-455bda965651"
        },
        {
            nombre: "ZPU",
            rol: "Vocalista y Escritor",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzpu3.jpg?alt=media&token=2be9033e-5b1b-4e3e-a8e1-ba1e2f0fa7f5"
        }, {
            nombre: "ZPU",
            rol: "Vocalista y Escritor",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2FZPU2.jpg?alt=media&token=787a26c8-be91-4adf-aef4-efe861b81c6d"
        }
    ]
    let conciertosMemorables = [
        {
            Fecha: "2022-2023",
            Pais: "Mexico",
            Descripción: "Su nombre es Juan Prieto Sánchez y comenzó su carrera en 1994 formando parte de los grupos 'Muerte Acústica' y 'Magnatiz'. Cuando éste último se disolvió, es cuando Juan decidió comenzar su carrera en solitario como ZPU.Su primer álbum en solitario 'El hombre de oro' fue lanzado en 2006 con colaboraciones de artistas como Nach, Abram, Maikro... Las colaboraciones continuaron y fueron aumentando dando a luz a su segundo álbum 'Contradicziones' en 2007, que fue seguido del tercero en 2010 'He tenido un sueño' que fue nombrado 'mejor disco de rap del año'.Su cuarto álbum 'Doce Lunas', publicado en 2013, fue el resultado de 3 años de trabajo, mostrando una evolución hacia una madurez musical.ZPU tiene fama de ser uno de los MC más profundos del mundo del rap hispano, incluso publicó un libro en 2016 bajo el título 'Los versos que nunca fueron canción'.A finales de 2016 publicó su último disco 'Espejo'.",
            Foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzpu4.jpg?alt=media&token=1b57b215-4dad-42fd-88bb-ad5af676f176"
        }, {
            Fecha: "2018",
            Pais: "Colombia",
            Descripción: "El compromiso con las raíces del movimiento hip hop unió a cuatro de los nombres más fuertes del rap español para traer a los barrios del mundo un mensaje certero en un nuevo formato: el Club 4. La unión de cuatro caballos: ZPU, el Chojin, Ambkor y el ex Duo Kie, Locus pasará por Bogotá y Medellín el próximo 20 y 21 de abril respectivamente para completar una ecuación compleja de rimas con contenido y misión.",
            Foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzpu-5.jpg?alt=media&token=3d2f2239-8c04-4071-8986-c190214d0bea"
        },
        {
            Fecha: "2014",
            Pais: "Madrid",
            Descripción: "Este 2014 ha sido el año elegido por el mc barcelonés para deleitarnos con los directos de su cuarto disco, el más arriesgado de toda su carrera musical: “Doce Lunas”.ZPU es un espécimen de escenario y en esta Gira estará acompañado de Soma, Aaron y Dj. Peki en un concierto inolvidable donde volar con las canciones de su último álbum además de disfrutar de temazos de toda su carrera. Un directo irrepetible donde compartir con el Hombre de Oro desde la energía y actitud de «Represento» al clásico del hip hop español «Camino solo», de la fuerza y sensibilidad de «Palacio de cristal» a la magia y la conexión de «Ángel guardián».",
            Foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzpu6.jpg?alt=media&token=b367be6f-9a63-46b4-a805-a7d1dfd8e1ad"
        },
        {
            Fecha: "2015",
            Pais: "Colombias",
            Descripción: "Nuevamente estará en Colombia ZPU “el Hombre de Oro”, presentando su Show para el deleite de los seguidores Colombianos El Hombre de oro, Contradicciones, He tenido un sueño y doce lunas son los álbumes que avalan la trayectoria de ZPU plagada de éxitos como “Camino Solo, Ángel Guardián. Revolución, noches en Bcn, represento, palacio de cristal”, que son solo algunos de los éxitos que podrán disfrutar en el mes de Noviembre.",
            Foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzpu7.jpg?alt=media&token=66d34671-a500-4f0f-aae8-c1105bdfedd8"
        },
        {
            Fecha: "2016",
            Pais: "Barcelona",
            Descripción: "presentando su Show para el deleite de los seguidores de Barcelona El Hombre de oro, Contradicciones, He tenido un sueño y doce lunas son los álbumes que avalan la trayectoria de ZPU plagada de éxitos como “Camino Solo, Ángel Guardián. Revolución",
            Foto: "https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/artista%2Fzpu8.webp?alt=media&token=f2ff0828-1704-4250-babf-5b290f5ac394"
        }
    ]
    // mapeando un arreglo para hacer rendir
    return (
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
                musicos.map(function (musico) {
                    return (
                        <>
                            <div className="col mx-auto">
                                <div className="card h-100 ">
                                    <img src={musico.url}
                                        className="img-fluid w-200 h-200" alt="foto" />
                                    <h1 className="text-center">{musico.nombre}</h1>
                                    <h1 className="text-center">{musico.rol}</h1>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
        
    )
    

}