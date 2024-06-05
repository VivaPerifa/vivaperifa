import './Footer.css';
import Github from '../../assets/icon_github.png';
import TikTok from '../../assets/icon_tiktok.png';
import Linkedin from '../../assets/icon_linkedin.png';
import Instagram from '../../assets/icon_instagram.png';
import Twitter from '../../assets/icon_twitter.png';
import Logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <div className='container-footer'>
            <div className='footer'>
                <div className='logo-footer'>
                    <img src={Logo} alt="" />
                </div>

                <div className='footer-column'>
                    <span className='bold-footer'>Inicio</span>
                    <span>Home</span>
                    <span>Explorar</span>
                </div>

                <div className='footer-column'>
                    <span className='bold-footer'>Sobre nós</span>
                    <span>Sobre a empresa</span>
                    <span>Patrocinadores</span>
                </div>

                <div className='footer-column'>
                    <span className='bold-footer'>Fale Conosco</span>
                    <span>FAQ</span>
                    <span>Contato</span>
                </div>

                <div className='footer-redes-sociais'>
                    <span className='bold-footer'>Redes sociais</span>
                    <div className='icon-footer'>

                        <img src={Github}/>

                        <img src={Linkedin}/>

                        <img src={Instagram}/>

                        <img src={TikTok}/>

                        <img src={Twitter} />

                    </div>
                </div>

            </div>

        </div>
    )
}