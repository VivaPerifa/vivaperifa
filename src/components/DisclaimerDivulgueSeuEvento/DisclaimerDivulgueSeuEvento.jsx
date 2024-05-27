import Parceiros from '../../assets/parceiros.png';
import './DisclaimerDivulgueSeuEvento.css';
import Botao from '../Botao/Botao';

export default function DisclaimerDivulgueSeuEvento(){
    return (
        <div className="divulgue-seu-evento">
            <div className="divulgar-evento__descricao" >
                <div className='divulgar-evento__titulo'>
                    <h2>
                        divulgue seus eventos
                    </h2>
                    <h3>
                        seja um parceiro
                    </h3>
                </div>
                <p>Junte-se a nós para impulsionar a cultura e os eventos na perifa! Entre em contato agora para se tornar um parceiro do VivaPerifa.</p>
                <Botao
                    legenda="Contato"
                    gradiente="linear-gradient(90deg, var(--cor-rosa) 0%, var(--cor-laranja) 99%)"
                    bordaRaio="10px"
                    espacamento="10px"
                    largura="50%"
                />

            </div>
            <figure className="divulgar-evento__imagem">
                <img src={Parceiros} alt="Parceiros do VivaPerifa" />
            </figure>
        </div>
    );
}