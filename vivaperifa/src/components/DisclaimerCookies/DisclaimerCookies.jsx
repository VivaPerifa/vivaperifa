import './DisclaimerCookies.css'
import Botao from '../Botao/Botao';

export default function Cookies() {
    return (
        <div className="container-cookies">
            <div className='cookies'>
                <div className="texto-cookies">
                    <span>Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdos de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento.</span>
                </div>
                <div className="btn_cookies">
                   <button>Aceitar</button>
                   <button>Política de Privacidade</button>
                </div>
            </div>
        </div>
    )
}