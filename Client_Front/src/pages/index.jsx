// Pagina Principal Landing
// Declaracion de la funcion Index
// Importar los estilos
import '../css/style-index.css'
// Importar las imagenes a autilizar
import Logo from '../assets/images/logo.png'
import fondoIncio from '../assets/images/fondo-inicio.png'
import software from '../assets/images/soft.jpg'
import Iot from '../assets/images/Iot.jpg'
import Nube from '../assets/images/nube.jpg'
import DesarrolloWeb from '../assets/images/desarrolloweb.png'

 function Index(){

  return(
    <div>
    {/* // Codigo Html */}
     <header >
           <a href="#" className='a-header-img'><img className="img-header text-center" src={Logo}/></a>
           <ul>
               <li><a className="a-header" href="#">INICIO</a></li> 
               <li><a className="a-header" href="prototipo.html">PROTOTIPO</a></li>
               <li><a className="a-header" href="nosotros.html">SOBRE NOSOTROS</a></li>
               <li><a className="a-header" href="#">CONTACTANOS</a></li>

           </ul>
     </header>
   
    {/* // <!--Presentacion de la pagina -->
    // <!-- Imagen de fondo --> */}
     <img src={fondoIncio} className="img-fluid" alt="No se encontró la imagen" />
   
    <div className="container">
        <div className="text-image">Bienvenido</div>
        <div className="content-info" id="content" >
          <div>¡Bienvenido a nuestra aplicación!</div>
          <div>Lorem ipsum dolor sit amet consectetur adipiscing elit, maecenas risus massa blandit turpis cum, tellus nisl primis habitant congue mus. Nascetur netus at pellentesque viverra ornare, taciti euismod eu iaculis. .</div>
        </div>
        <a className="button-image" href="#SobreNosotros-info">Explorar</a>
      </div>
      
      {/* <!-- Informacion acerca de los servicios que se ofrecen en la empresa --> */}
      <div className="div-servicios" id="SobreNosotros-info">
        <a href=""><img src={software} className="img-servicios" alt="No se encontró la imagen"/></a>
        <a href=""><img src={Iot} className="img-servicios" alt="No se encontró la imagen"/></a>
        <a href=""><img src={Nube} className="img-servicios" alt="No se encontró la imagen"/></a>
      </div>

      {/* <!-- Informacion sobre nosotros como empresa --> */}
      <div className="acerca-de-Nosotros">
        <div className="text-content">
          <h2>Sobre Nosotros</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum recusandae error aperiam obcaecati non! Dolores blanditiis exercitationem illo voluptatibus dolor maiores debitis natus, amet, at quasi voluptate! Accusamus, quae nisi!</p>
          <ul>
            <li>Opcion 1</li>
            <li>Opcion 2</li>
            <li>Opcion 3</li>

            <li><a className="button-image2" href="">Ver Más</a></li>
          </ul>
          
        </div>
        
        <img src={DesarrolloWeb} className="img-sobrenosotros" alt="No se encontró la imagen"/>
      </div>
      </div>
)}

{/* // Exportar componente Index */}
export default Index;