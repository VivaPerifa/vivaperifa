import CampoForm from '../../../../components/CampoForm/CampoForm';
import Botao from '../../../../components/Botao/Botao';
import './ProgramacaoEvento.css';
import Calendario from '../../../../assets/Calendário-teste.png'

export default function ProgramaçãoEvento() {
    return (
        <div className="container-prog-evento">
            <div className="prog-evento">
                <h2>Programação</h2>

                <p>Adicione a programação do seu evento, quanto mais precisos forem os dados da sua programação, mais confiança o seu público terá em você.</p>

                <div className="form-img-prog-evento">
                    <div className="form-prog-evento">
                        <CampoForm id='data-prog-evento' tipo='text' legenda='' tamanhoCampo='160%' tituloForm="Data do evento" />

                        <CampoForm id='hora-inic-prog-evento' tipo='text' legenda='' tamanhoCampo='160%' tituloForm="Horário de início" />

                        <CampoForm id='data-fim-prog-evento' tipo='text' legenda='' tamanhoCampo='160%' tituloForm="Horário de fim" />

                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                    </div>

                    <img src={Calendario} alt="" />
                </div>

                <div className="btn-prog-evento">
                    <a href='#'><h4>Voltar</h4></a>
                    <Botao
                        legenda="Avançar"
                        gradiente="var(--cor-laranja)"
                        bordaRaio="10px"
                        grossuraBorda="50px"
                        espacamento="10px"
                        largura="100%"
                    />
                </div>
            </div>
        </div>
    )
}