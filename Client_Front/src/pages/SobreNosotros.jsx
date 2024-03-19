// Pagina SObre Nosotros

import "../css/nosotros.css";
import "../css/style-index.css";

// Importar las imagenes a autilizar
import Software from '../assets/images/soft.jpg'


// Importar Componentes
import Header from '../components/header';
import Footer from '../components/footer'


function SobreNosotros() {
  return (
    <div>
      {/* // Codigo Html */}
      <Header></Header>

      <h1 className="titulos">Sobre Nosotros</h1>

      {/* <!-- Botón Modificar Infraestructura --> */}
      <button className="boton-azul">Vision</button>
      <div>
        <div className="contenedor-azul">
          <h2 className="text-white font-semibold text-lg mb-2">
            Infraestructura en la nube
          </h2>
          <p>
            En RassLight, nuestra visión es liderar la revolución tecnológica en
            el mundo de los prototipos IoT. Nos esforzamos por ser reconocidos
            como pioneros en el desarrollo de soluciones inteligentes y
            sostenibles que mejoren la calidad de vida de las personas y
            contribuyan al progreso de la sociedad.
          </p>
        </div>
        <div className="imagen">
          <img className="img" src={Software} alt="Imagen" />
        </div>
    </div>
    <button className="boton-mision">Misión</button>
    
    <div className="mision">
        <div className="imagen2">
            <img className="img2" src={Software} alt="Imagen"/>
        </div>
        <div className="contenedor-azul2">
            <h2 className='text-white font-semibold text-lg mb-2' >Infraestructura en la nube</h2>
            <p>Nuestra misión es proporcionar soluciones innovadoras y personalizadas que aprovechen al máximo el potencial de la tecnología IoT. Nos comprometemos a trabajar en estrecha colaboración con nuestros clientes para entender sus necesidades únicas y ofrecer productos y servicios de la más alta calidad que superen sus expectativas.</p>
        </div>
    </div>
    {/* <br><br><br><br><br><br><br><br><br><br><br> */}
    <h1 className="titulos">Nuestro Enfoque</h1>

    {/* Importar Footer */}
    <Footer></Footer>
    </div>
  );
}

export default SobreNosotros;
