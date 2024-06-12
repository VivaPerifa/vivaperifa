import './DisclaimerImpulsionarEvento.css';
import Alcance from '../../assets/alcance.png';

export default function DisclaimerImpulsionarEvento(){
    return (
        <div className='disclaimer-impulsionar-evento'>
            <div className='impulsionar-evento__descricao'>
                <h2>
                    aumente o <span>alcance</span> do seu evento
                </h2>
                <p>
                    Aumente o impacto do seu evento na comunidade com o VivaPerifa! Nossa  plataforma oferece ferramentas poderosas para promover e destacar seu  evento, alcançando o público certo e impulsionando sua visibilidade.  Junte-se a nós para levar sua iniciativa ao próximo nível!
                </p>
            </div>
            <figure className='impulsionar-evento__imagem'>
                <img src={Alcance} alt="" />
            </figure>
        </div>
    );
}