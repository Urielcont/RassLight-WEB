import { useForm } from 'react-hook-form';


// Importar las imagenes a autilizar
import Logo from '../assets/images/logo.png';

import '../css/login.css';


function Loginpage() {
    const { register,formState: { errors } } = useForm();
   
    return (
<div className="bg-gray-200 h-screen flex items-center justify-center">
    <div className="bg-white py-10 px-12 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
        <img className="mr-4 h-20 w-auto" src={Logo} />
        <h2 className="text-3xl font-semibold text-black">Login</h2>
        </div>
        <div className="mb-4">
            <label className=" block text-m font-semibold text-black" htmlFor="username">Username</label>
            <input type="Usuarioinp" {...register('username', { required: true })} id="username" className="mt-1 w-full border rounded-md"  />
            {errors.username && (
                <p className="text-red-500">Username es Requerido</p>
            )}
        </div>

        <div className="mb-6">
            <label className="block text-m font-semibold text-black" htmlFor="password">Contraseña</label>
            <input type="passwordinp" {...register('password', { required: true })} id="password" className="mt-1 w-full border rounded-md"  />
            {errors.password && (
                <p className="text-red-500">Contraseña es Requerido</p>
            )}
        </div>

        <div className="flex items-center justify-center">
            <button type="submitt" className="rounded-full text-white p-2 w-36 ">Ingresar</button>
        </div>
    </div>
</div>

    );
}

export default Loginpage;
