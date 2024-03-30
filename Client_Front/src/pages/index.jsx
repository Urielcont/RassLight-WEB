// Pagina Principal Landing
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importar los estilos
import '../css/style-index.css'
// Importar las imagenes a autilizar
import fondoIncio from '../assets/images/fondo-inicio.png'
import software from '../assets/images/soft.jpg'
import Iot from '../assets/images/Iot.jpg'
import Nube from '../assets/images/nube.jpg'
import DesarrolloWeb from '../assets/images/desarrolloweb.png'
// import FondoFace from '../assets/images/fondo-footer-facebook.jpg'

import Header from "../components/header";
import Footer from "../components/footer";

function Index() {

  return (
    <div>
      {/* // Codigo Html */}
      <Header></Header>

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
      <div className="acerca-de-Nosotros md:flex">
        <div className="text-content ">
          <h2 className='text-center pb-2'>Sobre Nosotros</h2>
          <p className='text-xs'>En esta página, nos gustaría compartir un poco más sobre quiénes somos, nuestra pasión por la innovación y cómo nos esforzamos por ofrecer soluciones de vanguardia en el mundo de la tecnología IoT.</p>
          <ul>
            <li className='block'>Opcion 1</li>
            <li className='block'>Opcion 2</li>
            <li className='block'>Opcion 3</li>
            {/* Boton para enviar a pagina nosotros */}
            <li><a className="button-image2" href="">Ver Más</a></li>
          </ul>

        </div>

        <img src={DesarrolloWeb} className="img-sobrenosotros " alt="No se encontró la imagen" />
      </div>

      {/* Contenido acerca del Prototipo */}

      <div className='bg-imagen'>
        <h1 className='text-white text-4xl text-center p-10 max-sm:text-2x1'>PROTOTIPO</h1>
        {/* Grid para contenido */}
        <div className='text-white grid grid-cols-3 place-items-center gap-y-16'>
          <div className='row-span-3 '>
            <img className='w-96 h-auto mb-24' src={Nube} alt="No se encontro la imagen" />
          </div>
          <div className=''>
            <h1 className='font-semibold text-center text-2xl max-sm:text-base'>Caracteristca 1</h1>
            <p className='italic text-sm text-neutral-300 max-sm:text-sm p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dolor alias beatae dignissimos tempora earum eos esse numquam nisi. Totam eum tempore dolor laudantium, eius vitae molestias ex ipsa nisi.</p>
          </div>
          <div>
            <h1 className='font-semibold text-center text-2xl max-sm:text-base'>Caracteristca 2</h1>
            <p className='italic text-sm text-neutral-300 max-sm:text-sm p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dolor alias beatae dignissimos tempora earum eos esse numquam nisi. Totam eum tempore dolor laudantium, eius vitae molestias ex ipsa nisi.</p>
          </div>
          <div>
            <h1 className='font-semibold text-center text-2xl max-sm:text-base'>Caracteristca 3</h1>
            <p className='italic text-sm text-neutral-300 max-sm:text-sm p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dolor alias beatae dignissimos tempora earum eos esse numquam nisi. Totam eum tempore dolor laudantium, eius vitae molestias ex ipsa nisi.</p>
          </div>
          <div>
            <h1 className='font-semibold text-center text-2xl max-sm:text-base'>Caracteristca 4</h1>
            <p className='italic text-sm text-neutral-300 max-sm:text-sm p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dolor alias beatae dignissimos tempora earum eos esse numquam nisi. Totam eum tempore dolor laudantium, eius vitae molestias ex ipsa nisi.</p>
          </div>
          <div className='col-span-2 m-4 bg-slate-400'>
            <a className="button-image2 mb-12 font-bold" href="">Ver Más</a>
          </div>
        </div>
      </div>



      {/* Componente Footer */}
      <Footer></Footer>
    </div>




  )
}

{/* // Exportar componente Index */ }
export default Index;

