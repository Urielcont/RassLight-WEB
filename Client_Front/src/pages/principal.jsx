// Pagina principal para mostrar datos del usuario
import { useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useMessage } from "../context/MessageContext";
import { useAuth } from "../context/authContext";
function Principal() {
  const { getMessages, messages } = useMessage();
  const {logout} = useAuth();

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (messages.length == 0) return <h1>No hay mensajes</h1>;

  return (
    // Encabezado de la Página Principal de Administración
    <div>
      <header className="bg-cyan-500 p-6 text-white flex items-center">
        <img className="w-20 start-0" src={logo}></img>
        <h1 className="text-3xl font-bold text-center m-auto text-black place-items-center">
          Sistema de Administración
        </h1>
        <Link className="text-1xl text-black text-end" onClick={logout} to="/">Salir</Link>
      </header>

      {/* Contenido Principal */}
      <div>
        {/* Tabla de Contenido */}
        <div className="rounded-md  justify-center items-center my-32 w-12/12 hover:table-fixed">
          <table className="min-w-full bg-white table-auto">
            <thead className="bg-gray-200 text-neutral-900">
              <tr className="text-center">
                <th className="py-1 px-2">Nombre Completo</th>
                <th className="py-1 px-4">Correo Electrónico</th>
                <th className="py-2 px-4">Mensaje</th>
                <th className="py-2 px-4">Fecha</th>
              </tr>
            </thead>
            <tbody className="text-stone-600 text-center">
              {messages.map((message) => (
                <tr key={message.id} className="text-focus">
                  <td className="py-2 px-4">{message.nombres}</td>
                  <td className="py-2 px-4">{message.correo}</td>
                  <td className="py-2 px-4">{message.mensaje}</td>
                  <td className="py-2 px-4">{message.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Principal;
