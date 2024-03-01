// Pagina principal para mostrar datos del usuario
// import {useForm} from "react-hook-form";
// import { Link } from "react-router-dom"; 
function Principal() {

    return (
        // Encabezado de la Página Principal de Administración
        <div>
            <header className="bg-blue-500 p-4 text-white">
                <h1 className="text-2xl font-bold">Bienvenido a la Página Principal de Administración</h1>
            </header>

            {/* Contenido Principal */}
            <div className="bg-yellow-400 p-4">

                {/* Tabla de Contenido */}
                <div className="border border-sky-500 overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4">Nombre</th>
                                <th className="py-2 px-4">Correo Electrónico</th>
                                <th className="py-2 px-4">Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="py-2 px-4">Malcolm Lockyer</td>
                                <td className="py-2 px-4">1961</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Witchy Woman</td>
                                <td className="py-2 px-4">The Eagles</td>
                                <td className="py-2 px-4">1972</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Shining Star</td>
                                <td className="py-2 px-4">Earth, Wind, and Fire</td>
                                <td className="py-2 px-4">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Principal;
