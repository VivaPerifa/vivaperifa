import './Footer.css';
import Github from '../../assets/icon_github.png';
import TikTok from '../../assets/icon_tiktok.png';
import Linkedin from '../../assets/icon_linkedin.png';
import Instagram from '../../assets/icon_instagram.png';
import Twitter from '../../assets/icon_x.png';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='container-footer'>
            <div className='footer'>
                <div className='logo-footer'>
                    <img src={Logo} alt="" />
                </div>

                <div className="footer-description">
                    <div className='footer-column'>
                        <span className='bold-footer'>Eventos</span>
                        <span><Link to="/home">Home</Link></span>
                        <span><Link to="/explorar">Explorar</Link></span>
                        <span><Link to="/comunidade">Comunidade</Link></span>
                    </div>

                    <div className='footer-column'>
                        <span className='bold-footer'>Empresa</span>
                        <span><Link to="/sobre-nos">Sobre nós</Link></span>
                        <span><Link to="/contato">Contato</Link></span>
                    </div>

                    <div className='footer-redes-sociais'>
                        <span className='bold-footer'>Redes sociais</span>
                        <div className='icon-footer'>

                            <a href='https://github.com/VivaPerifa' target='new'><img src={Github} /></a>

                            <a href='https://www.linkedin.com/company/vivaperifa/about/' target='new'><img src={Linkedin} /></a>

                            <a href='https://www.instagram.com/viva_perifa/' target='new'><img src={Instagram} /></a>

                            <a href='https://github.com/VivaPerifa' target='new'><img src={TikTok} /></a>

                            <a href='https://x.com/VivaPerifa' target='new'><img src={Twitter} /></a>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}