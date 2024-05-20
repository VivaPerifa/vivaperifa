import './DisclaimerCookies.css'
import Botao from '../Botao/Botao';

export default function Cookies() {
    return (
        <div className="container-cookies">
            <div className='cookies'>
                <div className="texto-cookies">
                    <h4>Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, vbocê concorda com tal monitoramento.</h4>
                </div>
                <div className="btn_cookies">
                    <Botao corFundo='#033E8C' legenda='Aceitar' largura='4vw'/>
                    <Botao corFundo='#033E8C' legenda='Política de Privacidade' largura='11vw'/>
                </div>
            </div>
        </div>
    )
}