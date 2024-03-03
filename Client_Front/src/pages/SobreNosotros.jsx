// Pagina SObre Nosotros
import '../css/nosotros.css';
import '../css/style-index.css';


// Importar las imagenes a autilizar
import Logo from '../assets/images/logo.png'
import Software from '../assets/images/soft.jpg'

function SobreNosotros(){
return(

    <div>
        {/* // Codigo Html */}
        <header >
                <a href="#" className='a-header-img'><img className="img-header text-center" src={Logo} /></a>
                <ul>
                    <li><a className="a-header" href="#">INICIO</a></li>
                    <li><a className="a-header" href="prototipo.html">PROTOTIPO</a></li>
                    <li><a className="a-header" href="nosotros.html">SOBRE NOSOTROS</a></li>
                    <li><a className="a-header" href="#">CONTACTANOS</a></li>
                </ul>
            </header>

        <h1 className="titulos">Sobre Nosotros</h1>
    
    {/* <!-- Botón Modificar Infraestructura --> */}
    <button className="boton-azul">Vision</button>
    <div >
        <div className="contenedor-azul">
            <h2>Infraestructura en la nube</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid possimus maxime dolores quisquam commodi repellendus modi, ex deleniti at? Aspernatur amet aut et expedita iusto sint omnis? Architecto, officia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, soluta! Aspernatur est facilis, voluptatum velit quaerat eius incidunt, ab alias inventore nihil ipsum, qui architecto fugiat error. Aliquid, obcaecati non.</p>
        </div>
        <div className="imagen">
            <img className="img" src={Software} alt="Imagen"/>
        </div>
    </div>
    <button className="boton-mision">Misión</button>
    
    <div className="mision">
        <div className="imagen2">
            <img className="img2" src={Software} alt="Imagen"/>
        </div>
        <div className="contenedor-azul2">
            <h2>Infraestructura en la nube</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid possimus maxime dolores quisquam commodi repellendus modi, ex deleniti at? Aspernatur amet aut et expedita iusto sint omnis? Architecto, officia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, soluta! Aspernatur est facilis, voluptatum velit quaerat eius incidunt, ab alias inventore nihil ipsum, qui architecto fugiat error. Aliquid, obcaecati non.</p>
        </div>
    </div>
    {/* <br><br><br><br><br><br><br><br><br><br><br> */}
    <h1 className="titulos">Nuestro Enfoque</h1>
    </div>
);
}

export default SobreNosotros;