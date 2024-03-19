// Pagina Principal Landing
import { Link } from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.css';
// Importar los estilos
import '../css/style-index.css'
// Importar las imagenes a autilizar
import Logo from '../assets/images/logo.png'
import fondoIncio from '../assets/images/fondo-inicio.png'
import software from '../assets/images/soft.jpg'
import Iot from '../assets/images/Iot.jpg'
import Nube from '../assets/images/nube.jpg'
import DesarrolloWeb from '../assets/images/desarrolloweb.png'
// import FondoFace from '../assets/images/fondo-footer-facebook.jpg'
import Footer from "../components/footer";

function Index() {

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

      {/* // <!--Presentacion de la pagina -->
    // <!-- Imagen de fondo --> */}
      <img src={fondoIncio} className="img-fluid" alt="No se encontró la imagen" />

      <div className="container">
        <div className="text-image">Bienvenido</div>
        <div className="mb-12 content-info" id="content" >
          <div>¡Bienvenido a nuestra aplicación!</div>
          <div>¡Gracias por unirte a nosotros en nuestra misión de innovación y tecnología IoT! En nuestra aplicación, encontrarás soluciones inteligentes para el monitoreo y control de diversos procesos, incluyendo el emocionante mundo de la purificación de agua.</div>
        </div>
        <a className="button-image" href="#SobreNosotros-info">Explorar</a>
      </div>

      {/* <!-- Informacion acerca de los servicios que se ofrecen en la empresa --> */}
      <div className="div-servicios" id="SobreNosotros-info">
        <a href=""><img src={software} className="img-servicios" alt="No se encontró la imagen" /></a>
        <a href=""><img src={Iot} className="img-servicios" alt="No se encontró la imagen" /></a>
        <a href=""><img src={Nube} className="img-servicios" alt="No se encontró la imagen" /></a>
      </div>

      {/* <!-- Informacion sobre nosotros como empresa --> */}
      <div className="acerca-de-Nosotros">
        <div className="text-content">
          <h2>Sobre Nosotros</h2>
          <p>En esta página, nos gustaría compartir un poco más sobre quiénes somos, nuestra pasión por la innovación y cómo nos esforzamos por ofrecer soluciones de vanguardia en el mundo de la tecnología IoT.</p>
          <ul>
            <li>Opcion 1</li>
            <li>Opcion 2</li>
            <li>Opcion 3</li>

            <li><a className="button-image2" href="">Ver Más</a></li>
          </ul>

        </div>

        <img src={DesarrolloWeb} className="img-sobrenosotros" alt="No se encontró la imagen" />
      </div>
      <Footer></Footer>
    </div>




  )
}

{/* // Exportar componente Index */ }
export default Index;

