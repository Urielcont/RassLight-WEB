import { useForm } from 'react-hook-form';
// Importar estilos
import '../css/style-index.css'
// Importar imagenes
import Logo from '../assets/images/logo.png'
import {Link } from "react-router-dom";
import {sendMessageRequest} from '../api/auth.js';


function Contactanos() {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (values) => {
        console.log(values);
        const res = await sendMessageRequest(values);
        console.log('Mensaje correcto')
        console.log(res);
    };
    return (
        <div>
            {/* // Codigo Html */}
            <header >
                <a href="#" className='a-header-img'><img className="img-header text-center m-auto" src={Logo} /></a>
                <ul>
                    <li><Link className='a-header' to="/">Inicio</Link></li>
                    <li><Link className='a-header' to="/Prototipo">Prototipo</Link></li>
                    <li><Link className='a-header' to="/SobreNosotros">Sobre Nosotros</Link></li>
                    <li><Link className='a-header' to="/Contactanos">Contactanos</Link></li>

                </ul>
            </header>




            <img src={Logo} className="logo-pic" alt="Imagen Descriptiva" />

            <form className='shadow-lg shadow-indigo-500/50' onSubmit={handleSubmit(onSubmit)} > 
                <div className='mb-4'>
                    <label htmlFor="nombres">Nombres:</label>
                    <input type="text" className='h-9 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100' name="nombres" {...register("nombres", {required: true})} />
                </div>
                <div className='mb-6'>
                    <label htmlFor="correo">Correo:</label>
                    <input type="email" className='h-9 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100' name="correo" {...register("correo", {required: true})}/>
                </div>

                <div className='mb-6'>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea className='h-32 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100' name="mensaje" {...register("mensaje", {required: true})} />
                </div>
                <div className='flex items-center justify-center'>
                    <button type="submit" className='inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]'>Enviar Mensaje</button>
                </div>
            </form>
        </div>


    );
}

export default Contactanos;