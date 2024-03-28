// Pagina Prototipo landing

// Importar los estilos
import '../css/style-index.css'
import '../css/nosotros.css'
// Importar las imagenes a autilizar
import Sensor from '../assets/images/sensor.jpeg'
import Sensor1 from '../assets/images/ph.png'
import Sensor2 from '../assets/images/flujo.png'
import Sensor3 from '../assets/images/turbi.jpg'

import Iot from '../assets/images/Iot.jpg'

// Importar Componentes
import Header from '../components/header'
import Footer from '../components/footer'
function Prototipo() {
    return (
        <div>
            {/* // Codigo Html */}
            {/* Importar Header */}
            <Header></Header>

            <img src={Iot} className="img-incio-proto" alt="No se encontró la imagen" />

            <div className="bg-black dark-container">
                <h1>PROTOTIPO</h1>
                <p>Nuestra última creación es un purificador de agua inteligente diseñado para garantizar la calidad óptima del agua en todo momento. Este innovador dispositivo mide continuamente tres parámetros clave para garantizar la pureza del agua que consumes</p>
                <img src={Sensor} className="small-image" alt="No se encontró la imagen" />
                <p className="small-text">Lorem Ipsum Descripcion de cada sensor para que sirve cada uno</p>



                <div className="card-container">
                    <div className="bg-slate-700 card">
                        <h1 className='text-white font-semibold text-lg mb-2'>Sensor del PH</h1>
                        <p className='text-white'>El nivel de pH del agua es fundamental para determinar su acidez o alcalinidad. Nuestro prototipo mide el pH en tiempo real para asegurarse de que el agua esté dentro de los niveles seguros para el consumo humano.</p>
                        <img src={Sensor1} alt="No se encontró la imagen" />
                    </div>
                    <div className="bg-slate-700 card">
                        <h1 className='text-white font-semibold text-lg mb-2'>Sensor del flujo del agua</h1>
                        <p className='text-white'>La turbidez del agua se refiere a la claridad o transparencia del líquido. Nuestro dispositivo detecta cualquier partícula en suspensión que pueda afectar la calidad del agua, garantizando que sea cristalina y segura para beber.</p>
                        <img src={Sensor2} alt="No se encontró la imagen" />
                    </div>
                    <div className="bg-slate-700 card">
                        <h1 className='text-white font-semibold text-lg mb-2'>Sensor de Turbidez</h1>
                        <p className='text-white'>El flujo de agua es crucial para asegurar un suministro constante y eficiente. Nuestro prototipo monitorea el flujo para detectar cualquier irregularidad y asegurar un suministro estable en todo momento.</p>
                        <img src={Sensor3} alt="No se encontró la imagen" />
                    </div>
                </div>
            </div>

            <h2 className='text-black font-semibold text-3xl ml-5 mt-5'>Componentes</h2>
            <div className="grid place-items-center grid-cols-2 mx-48">
                <div className="content-center">
                    <img src={Sensor1} alt="Image 1" className="h-auto max-w-80" />
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl'>PH</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolores doloremque, sunt at tenetur. Aspernatur nesciunt assumenda, saepe, facilis repudiandae perspiciatis veniam commodi, quos modi sit deserunt a voluptas?</p>
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl'>Flujo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolores doloremque, sunt at tenetur. Aspernatur nesciunt assumenda, saepe, facilis repudiandae perspiciatis veniam commodi, quos modi sit deserunt a voluptas?</p>
                </div>
                <div className="content-center items-center">
                    <img src={Sensor2} alt="Image 2" className="h-auto max-w-80" />
                </div>
                <div className="justify-center">
                    <img src={Sensor3} alt="Image 3" className="h-auto max-w-80" />
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl'>Turbidez</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolores doloremque, sunt at tenetur. Aspernatur nesciunt assumenda, saepe, facilis repudiandae perspiciatis veniam commodi, quos modi sit deserunt a voluptas?</p>
                </div>

            </div>
            {/* Parte de especificaciones*/}
            <div className='grid place-items-center grid-cols-2  bg-gray-500 h-auto'>
                <div>
                    <h1 className='text-white'>ESPECIFICACIONES</h1>
                </div>
                <div className='mt-6'>
                    <ul className='text-white proto-list' >
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-white'>DOCUMENTACION</h1>
                </div>
                <div>
                    <a href="" className='text-blue-200'>Documentacion Oficial</a>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}


export default Prototipo;