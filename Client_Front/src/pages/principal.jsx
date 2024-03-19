// Pagina principal para mostrar datos del usuario
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useMessage } from "../context/MessageContext";
import { useAuth } from "../context/authContext";

function Principal() {
  const { getMessages, messages } = useMessage();
  const { logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [sortOrder, setSortOrder] = useState("reciente");

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Filtrar los mensajes basados en el término de búsqueda
    const filtered = messages.filter((message) =>
      message.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.mensaje.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Ordenar los mensajes según el criterio seleccionado
    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "reciente") {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime(); // Ordenar de más reciente a más antiguo
      } else if (sortOrder === "viejo") {
        return new Date(a.fecha).getTime() - new Date(b.fecha).getTime(); // Ordenar de más antiguo a más reciente
      } else if (sortOrder === "a-z") {
        return a.nombres.localeCompare(b.nombres); // Ordenar alfabéticamente de A-Z
      } else if (sortOrder === "z-a") {
        return b.nombres.localeCompare(a.nombres); // Ordenar alfabéticamente de Z-A
      }
    });

    setFilteredMessages(sorted);
  }, [messages, searchTerm, sortOrder]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Obtener los componentes de la fecha
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses van de 0 a 11, por lo que se suma 1
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Agregar ceros a la izquierda si es necesario para tener dos dígitos en el día y el mes
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
  
    // Construir la cadena de fecha formateada
    const formattedDate = `${formattedDay}-${formattedMonth}-${year} ${hours}:${minutes}`;
  
    return formattedDate;
  };

  return (
    // Encabezado de la Página Principal de Administración
    <div>
      <header className="bg-cyan-500 p-6 text-white flex items-center">
        <img className="w-20 start-0" src={logo} alt="Logo"></img>
        <h1 className="text-3xl font-bold text-center m-auto text-black place-items-center">
          Sistema de Administración
        </h1>
        <Link className="text-1xl text-black text-end" onClick={logout} to="/">
          Salir
        </Link>
      </header>
  
      {/* Contenido Principal */}
      <div>
        <div className="rounded-md my-4 mx-auto w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar mensajes..."
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
          />
        </div>
  
        {/* Selector de orden */}
        <div className="rounded-md my-4 mx-auto w-1/2">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
          >
            <option value="reciente">Más Reciente</option>
            <option value="viejo">Más Antiguo</option>
            <option value="a-z">Filtrar por nombre: A-Z</option>
            <option value="z-a">Filtrar por nombre: Z-A</option>
          </select>
        </div>
  
        {/* Tabla de Contenido */}
        <div className="rounded-md justify-center items-center my-32 w-12/12 hover:table-fixed">
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
              {filteredMessages.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-2 px-4">No hay mensajes</td>
                </tr>
              ) : (
                filteredMessages.map((message) => (
                  <tr key={message.id} className="text-focus">
                    <td className="py-2 px-4">{message.nombres}</td>
                    <td className="py-2 px-4">{message.correo}</td>
                    <td className="py-2 px-4">{message.mensaje}</td>
                    <td className="py-2 px-4">{formatDate(message.fecha)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Principal;
