// Pagina Prototipo landing

// Importar los estilos
import '../css/style-index.css'
import '../css/nosotros.css'
import { Link } from 'react-router-dom'
// Importar las imagenes a autilizar
import Logo from '../assets/images/logo.png'
import Sensor from '../assets/images/sensor.jpeg'
import Sensor1 from '../assets/images/ph.png'
import Sensor2 from '../assets/images/flujo.png'
import Sensor3 from '../assets/images/turbi.jpg'

import Iot from '../assets/images/Iot.jpg'

function Prototipo() {
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


            <div className="two-columns">
                <div className="column">
                    <img src={Sensor} alt="Image 1" className="image" />
                    <p>Información sobre Image 1</p>
                </div>
                <div className="column">
                    <p>Información sobre Image 2</p>
                    <img src={Sensor} alt="Image 2" className="image" />
                </div>
                <div className="column">
                    <img src={Sensor} alt="Image 3" className="image" />
                    <p>Información sobre Image 3</p>
                </div>
                <div className="column">
                    <p>Información sobre Image 4</p>
                    <img src={Sensor} alt="Image 4" className="image" />
                </div>
                {/* <!-- Agrega más filas según sea necesario --> */}
            </div>
        </div>
    );
}


export default Prototipo;