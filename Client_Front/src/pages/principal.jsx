import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useMessage } from "../context/MessageContext";
import { useAuth } from "../context/authContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal.jsx"

function Principal() {
  const navigate = useNavigate();
  const { getMessages, messages } = useMessage();
  const { logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [sortOrder, setSortOrder] = useState("reciente");
  const [selectedSection, setSelectedSection] = useState("todos"); // Estado inicial: Todos los mensajes

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  const handleLogout = () => {
    Swal.fire({
      title: "Seguro de salir?",
      text: "Estás a punto de cerrar sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");
      }
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    // Filtrar los mensajes según la sección seleccionada
    const filtered =
      selectedSection === "todos"
        ? messages.filter((message) =>
            message.mensaje.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : messages.filter(
            (message) =>
              message.mensaje
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              message.estado === selectedSection
          );

    // Ordenar los mensajes según el criterio seleccionado
    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "reciente") {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
      } else if (sortOrder === "viejo") {
        return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
      } else if (sortOrder === "a-z") {
        return a.nombres.localeCompare(b.nombres);
      } else if (sortOrder === "z-a") {
        return b.nombres.localeCompare(a.nombres);
      }
    });

    setFilteredMessages(sorted);
  }, [messages, searchTerm, sortOrder, selectedSection]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;
    const formattedDate = `${formattedDay}-${formattedMonth}-${year} ${hours}:${minutes}`;
    return formattedDate;
  };

  function getStatusColor(estado) {
    switch (estado) {
      case "activo":
        return "blue";
      case "pendiente":
        return "orange";
      case "terminado":
        return "red";
      default:
        return "gray";
    }
  }

  return (
    <div>
      <header className="bg-cyan-500 p-6 text-white flex items-center">
        <img className="w-20 start-0" src={logo} alt="Logo"></img>
        <h1 className="text-3xl font-bold text-center m-auto text-black ">
          Sistema de Administración
        </h1>
        <Link
          className="inline-block bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Salir
        </Link>
      </header>

      <div>
        {/* Agregar botones para cambiar la sección */}
        <div className="flex justify-around mb-4">
          <button
            className={`${
              selectedSection === "todos" ? "bg-blue-500" : "bg-gray-300"
            } text-white font-bold py-2 px-4 ${
              selectedSection === "todos" ? "" : "m-2"
            } basis-4/12`}
            onClick={() => handleSectionChange("todos")}
          >
            Principal
          </button>
          <button
            className={`${
              selectedSection === "activo" ? "bg-blue-500" : "bg-gray-300"
            } text-white font-bold py-2 px-4 ${
              selectedSection === "activo" ? "" : "m-2"
            } basis-4/12`}
            onClick={() => handleSectionChange("activo")}
          >
            Activos
          </button>
          <button
            className={`${
              selectedSection === "pendiente" ? "bg-blue-500" : "bg-gray-300"
            } text-white font-bold py-2 px-4 ${
              selectedSection === "pendiente" ? "" : "m-2"
            } basis-4/12`}
            onClick={() => handleSectionChange("pendiente")}
          >
            Pendientes
          </button>
          <button
            className={`${
              selectedSection === "terminado" ? "bg-blue-500" : "bg-gray-300"
            } text-white font-bold py-2 px-4 ${
              selectedSection === "terminado" ? "" : "m-2"
            } basis-4/12`}
            onClick={() => handleSectionChange("terminado")}
          >
            Terminados
          </button>
        </div>
        <div className="rounded-md my-4 mx-auto w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar mensajes..."
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
          />
        </div>

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

          <Modal></Modal>
        </div>

        {/* Tabla de Contenido */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {filteredMessages.length === 0 ? (
            <div className="text-center text-gray-600 col-span-full">
              No hay mensajes
            </div>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                className="bg-cyan-50 rounded-lg shadow-md overflow-hidden relative m-3"
              >
                <div className="flex-grow p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {message.nombres}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Correo:</strong> {message.correo}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Mensaje:</strong>{" "}
                    {message.mensaje.length > 20
                      ? `${message.mensaje.substring(0, 20)}...`
                      : message.mensaje}
                    {message.mensaje.length > 20 && (
                      <button className="text-blue-500">Ver más</button>
                    )}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Fecha:</strong> {formatDate(message.fecha)}
                  </p>
                  <div
                    className={`bg-${getStatusColor(
                      message.estado
                    )}-500 absolute w-3 right-0 bottom-0 h-48`}
                  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded absolute bottom-2 right-10 text-xs">
                  Responder
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Principal;
