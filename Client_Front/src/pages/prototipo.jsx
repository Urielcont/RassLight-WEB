// Pagina Prototipo landing

// Importar los estilos
import '../css/style-index.css'
import '../css/nosotros.css'
import { Link } from 'react-router-dom'
// Importar las imagenes a autilizar
import Logo from '../assets/images/logo.png'
import Sensor from '../assets/images/sensor.jpeg'
import Iot from '../assets/images/Iot.jpg'

function Prototipo() {
    return (
        <div>
             {/* // Codigo Html */}
      <header >
                <a href="#" className='a-header-img'><img className="img-header text-center" src={Logo} /></a>
                <ul>
                    <li><Link className='a-header' to="/">Inicio</Link></li>
                    <li><Link className='a-header' to="/Prototipo">Prototipo</Link></li>
                    <li><Link className='a-header' to="/SobreNosotros">Sobre Nosotros</Link></li>
                    <li><Link className='a-header' to="/Contactanos">Contactanos</Link></li>

                </ul>
            </header>


            <img src={Iot} className="img-incio-proto" alt="No se encontró la imagen" />

            <div className="dark-container">
                <h1>PROTOTIPO</h1>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit at atque sed ad dolor id eum facere repudiandae commodi, odio tenetur officia doloribus blanditiis quae molestiae nam fuga provident fugit!</p>
                <img src={Sensor} className="small-image" alt="No se encontró la imagen" />
                <p className="small-text">Lorem Ipsum Descripcion de cada sensor para que sirve cada uno</p>



                <div className="card-container">
                    <div className="card">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae, mollitia enim repellat eius architecto quibusdam! Odit aut ad unde doloremque nihil assumenda doloribus ab, omnis labore nostrum enim error?</p>
                        <img src={Sensor} alt="No se encontró la imagen" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae, mollitia enim repellat eius architecto quibusdam! Odit aut ad unde doloremque nihil assumenda doloribus ab, omnis labore nostrum enim error?</p>
                        <img src={Sensor} alt="No se encontró la imagen" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae, mollitia enim repellat eius architecto quibusdam! Odit aut ad unde doloremque nihil assumenda doloribus ab, omnis labore nostrum enim error?</p>
                        <img src={Sensor} alt="No se encontró la imagen" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae, mollitia enim repellat eius architecto quibusdam! Odit aut ad unde doloremque nihil assumenda doloribus ab, omnis labore nostrum enim error?</p>
                        <img src={Sensor} alt="No se encontró la imagen" />
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