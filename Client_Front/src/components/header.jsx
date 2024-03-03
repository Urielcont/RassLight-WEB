
import { Link } from "react-router-dom";

import Logo from '../assets/images/logo.png'
function header()
{
    return(
        <div>
            <header >
                <a href="#" className='a-header-img'><img className="img-header text-center" src={Logo} /></a>
                <ul>
                    <li><Link className='a-header' to="/">Inicio</Link></li>
                    <li><Link className='a-header' to="/Prototipo">Prototipo</Link></li>
                    <li><Link className='a-header' to="/SobreNosotros">Sobre Nosotros</Link></li>
                    <li><Link className='a-header' to="/Contactanos">Contactanos</Link></li>

                </ul>
            </header>
        </div>
    );
}

export default header;