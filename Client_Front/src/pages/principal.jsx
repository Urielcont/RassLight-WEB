// Pagina principal para mostrar datos del usuario
// import {useForm} from "react-hook-form";
// import { Link } from "react-router-dom"; 
import logo from '../assets/images/logo.png'
function Principal() {

    return (
        // Encabezado de la Página Principal de Administración
        <div>
            <header className="bg-cyan-500 p-6 text-white flex items-center">
            <img className='w-20 start-0' src={logo}></img>
             <h1 className="text-3xl font-bold text-center m-auto text-black place-items-center">Sistema de Administración</h1>
             <h1 className="text-1xl text-black text-end">Salir</h1>
            </header>

            {/* Contenido Principal */}
            <div>

                {/* Tabla de Contenido */}
                <div className="rounded-md  justify-center items-center my-32 w-12/12 hover:table-fixed" >
                    <table className="min-w-full bg-white table-auto">
                        <thead className="bg-gray-200 text-neutral-900">
                            <tr className="text-center">
                                <th className="py-1 px-2">Nombre Completo</th>
                                <th className="py-1 px-4">Correo Electrónico</th>
                                <th className="py-2 px-4">Mensaje</th>
                            </tr>
                        </thead>
                        <tbody className="text-stone-600 text-center" >
                            <tr className='text-focus'>
                                <td className="py-2 px-4">Malcom</td>
                                <td className="py-2 px-4">Malcolm@asa</td>
                                <td className="py-2 px-4">My buena pagina</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Uriel</td>
                                <td className="py-2 px-4">Eagles@gmail.com</td>
                                <td className="py-2 px-4">Quiero comprar una de esas</td>
                            </tr>
                            <tr className='text-focus'>
                                <td className="py-2 px-4">Juanes</td>
                                <td className="py-2 px-4">sdsd@gmail.com</td>
                                <td className="py-2 px-4">Muchas gracias</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Principal;
