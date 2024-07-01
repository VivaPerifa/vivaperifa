import Parceiros from '../../assets/parceiros.png';
import BotaoColorido from '../BotaoColorido/BotaoColorido';
import './DisclaimerDivulgueSeuEvento.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function DisclaimerDivulgueSeuEvento(){
    const {t} = useTranslation();

    return (
        <div className="divulgue-seu-evento">
            <div className="divulgar-evento__descricao" >
                <div className='divulgar-evento__titulo'>
                    <h2>
                        {t('disclaimer.divulgue-evento')}
                    </h2>
                    <h3>
                        {t('disclaimer.seja-parceiro')}
                    </h3>
                </div>
                <p>{t('disclaimer.junte-se')}</p>
                <Link to="/contato">
                    <BotaoColorido 
                        legendaBotao="Contato"
                        larguraBotao="50%"
                    />
                </Link>

            </div>
            <figure className="divulgar-evento__imagem">
                <img src={Parceiros} alt="Parceiros do VivaPerifa" />
            </figure>
        </div>
    );
}