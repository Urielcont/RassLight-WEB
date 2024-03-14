import { useState } from "react"; // Agregar useState
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Importar las imagenes a utilizar
import Logo from "../assets/images/logo.png";

import "../css/login.css";

function Loginpage() {
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formCompleted, setFormCompleted] = useState(false); // Estado para controlar si los campos están completos

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/principal");
    }
  }, [isAuthenticated, navigate]);

  // Función para verificar si los campos están completos
  const checkFormCompletion = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    setFormCompleted(username !== "" && password !== "");
  };

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white py-10 px-12 rounded-lg shadow-md flex flex-col items-center w-full max-w-sm">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}

        <div className="mb-4">
          <img className="h-24 w-auto" src={Logo} alt="Logo" />
        </div>
        <form
          className="w-full max-w-sm"
          onSubmit={handleSubmit(onSubmit)}
          onChange={checkFormCompletion} // Verificar los cambios en los campos de entrada
        >
          <h2 className="text-center text-3xl font-thin text-black">Login</h2>
          <br />
          <div className="mb-4">
            <label
              className="block text-m font-semibold text-black"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="Usuarioinp"
              {...register("username", { required: true })}
              id="username"
              className="text-black mt-1 w-full border rounded-md"
            />
            {errors.username && (
              <p className="text-red-500">Username es Requerido</p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-m font-semibold text-black"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              id="password"
              className="mt-1 w-full border rounded-md text-black"
            />
            {errors.password && (
              <p className="text-red-500">Contraseña es Requerido</p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={!formCompleted}
              id="botonIngresar"
              className={`rounded-full text-white p-2 w-36 ${
                formCompleted
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "disabled-button"
              }`}
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
