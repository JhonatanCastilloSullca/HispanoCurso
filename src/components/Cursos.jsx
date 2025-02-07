import React, { useState } from "react";

function Cursos({ cursos }) {
    const [cursoSeleccionado, setCursoSeleccionado] = useState(cursos[0]);

    const manejarCambioCurso = (index) => {
        setCursoSeleccionado(cursos[index]);
    };

    return (
        <div className="w-full mx-auto max-w-7xl">
            <div className="w-full max-w-7xl mb-14 mx-auto text-center">
                <div className=" top-24 md:top-20 w-full flex px-24 bg-brownDark dark:bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 rounded divide-x divide-muted-200 dark:divide-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/30 overflow-x-auto z-30">
                    {cursos.map((curso, index) => (
                        <button
                            key={index}
                            onClick={() => manejarCambioCurso(index)}
                            className={`hover:text-yellowSecondary dark:hover:text-yellowSecondary dark:text-brownDark text-white group flex-1 text-center justify-center flex items-center px-5 py-3 whitespace-nowrap font-sans hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${cursoSeleccionado === curso
                                ? "bg-muted-200 dark:bg-muted-600  dark:bg-white dark:text-brownDark text-white font-bold "
                                : ""
                                }`}
                        >
                            {curso.titulo}
                        </button>
                    ))}
                </div>
                <div className="container py-4 mt-10 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">
                        <div className="prose max-w-none px-24">
                            <h2 slot="heading-title" className="font-black text-grayDark dark:text-white h2 my-4 text-left">
                                {cursoSeleccionado.titulo}
                            </h2>
                            <div slot="heading-content" className="text-justify text-grayMedium dark:text-white">
                                <p>{cursoSeleccionado.descripcion}</p>
                                <ul className="py-4">
                                    {cursoSeleccionado.beneficios.map((beneficio, index) => (
                                        <li key={index} className="text-grayMedium dark:text-white font-medium flex gap-4">
                                            ▪ {beneficio.titulo}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        className=" bg-brownDark dark:bg-yellowSecondary rounded-lg px-4 py-2 text-white font-semibold"
                                        href="/contactez"
                                        target="_self"
                                        rel=""
                                    >
                                        Book a table
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">

                            <video
                                className="object-cover img-instructor rounded-md h-full"
                                src={cursoSeleccionado.imagenes[0].imagen}
                                autoPlay
                                loop
                                muted
                            >
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cursos;
