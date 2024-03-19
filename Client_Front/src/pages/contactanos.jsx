import { useForm } from "react-hook-form";
// Importar estilos
import "../css/style-index.css";
// Importar imagenes
import Logo from "../assets/images/logo.png";
import { useMessage } from "../context/MessageContext.jsx";

// Importar Componentes
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

function Contactanos() {
  const { register, handleSubmit } = useForm();

  const { createMessage } = useMessage();

  const onSubmit = handleSubmit((data) => {
    createMessage(data);
  });
  return (
    <div>
      {/* // Codigo Html */}
     {/* Importar Header */}
     <Header></Header>
     
      <img src={Logo} className="logo-pic" alt="Imagen Descriptiva" />

      <form
        className="shadow-lg shadow-indigo-500/50 mb-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            className="h-9 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100"
            name="nombres"
            {...register("nombres", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            className="h-9 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100"
            name="correo"
            {...register("correo", { required: true })}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            className="h-32 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100"
            name="mensaje"
            {...register("mensaje", { required: true })}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
            {/* Importar Footer */}
        <Footer></Footer>
    </div>
  );
}

export default Contactanos;
