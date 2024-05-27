import Parceiros from '../../assets/parceiros.png';
import './DisclaimerDivulgueSeuEvento.css';

export default function DisclaimerDivulgueSeuEvento(){
    return (
        <div className="divulgue-seu-evento">
            <div className="divulgar-evento__descricao" >
                <div className='divulgar-evento__titulo'>
                    <h2>
                        divulgue seus eventos
                    </h2>
                    <h3>seja um parceiro</h3>
                </div>
                <p>Junte-se a nós para impulsionar a cultura e os eventos na perifa! Entre em contato agora para se tornar um parceiro do VivaPerifa.</p>
                <button>Contato</button>
            </div>
            <figure className="divulgar-evento__imagem">
                <img src={Parceiros} alt="Parceiros do VivaPerifa" />
            </figure>
        </div>
    );
}