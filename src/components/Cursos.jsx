import React, { useState } from "react";

function Cursos({ cursos }) {
    const [cursoSeleccionado, setCursoSeleccionado] = useState(cursos[0]); // Inicializa con el primer curso

    const manejarCambioCurso = (index) => {
        setCursoSeleccionado(cursos[index]);
    };

    return (
        <div className="w-full mx-auto max-w-7xl">
            <div className="w-full max-w-3xl mb-14 mx-auto text-center">
                <div className="sticky top-24 md:top-20 w-full flex bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 rounded divide-x divide-muted-200 dark:divide-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/30 overflow-x-auto z-30">
                    {cursos.map((curso, index) => (
                        <button
                            key={index}
                            onClick={() => manejarCambioCurso(index)}
                            className={`group flex-1 text-center justify-center flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${cursoSeleccionado === curso
                                ? "bg-muted-200 dark:bg-muted-600 text-blue-800 font-bold" // Resalta el curso seleccionado
                                : ""
                                }`}
                        >
                            {curso.titulo}
                        </button>
                    ))}
                </div>
                <div className="container py-4 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">
                        <div className="prose max-w-none">
                            <span className="not-prose items-start mb-4 rounded-full px-3 py-1 text-base font-semibold bg-brand-red/5 text-brand-red ring-1 ring-brand-red flex justify-start w-fit">
                                benvenuto
                            </span>
                            <h2 slot="heading-title" className="font-black text-brand-red h2 my-4">
                                {cursoSeleccionado.titulo}
                            </h2>
                            <div slot="heading-content" className="text-justify">
                                <p>{cursoSeleccionado.descripcion}</p>
                                <ul className="py-4">
                                    {cursoSeleccionado.beneficios.map((beneficio, index) => (
                                        <li key={index} className="text-brand-red font-medium flex gap-4">
                                            ⚫ {beneficio.titulo}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        className="not-prose button button-red"
                                        href="/book"
                                        target="_self"
                                        rel=""
                                    >
                                        Book a table
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={cursoSeleccionado.imagenes[0].imagen}
                                alt="Perfil"
                                className="w-96 h-auto object-cover img-instructor rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cursos;
