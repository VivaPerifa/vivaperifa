import React, { useState } from 'react';
import CampoForm from '../../../../components/CampoForm/CampoForm';
import './ProgramacaoEvento.css';
import { Link } from 'react-router-dom';

import Calendario from '../../../../assets/Calendário-teste.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MenuLateralPerfil from '../../MenuLateralPerfil/MenuLateralPerfil';
// import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import BotaoLaranja from '../../../../components/BotaoLaranja/BotaoLaranja';

export default function ProgramacaoEvento() {
    const [date, setDate] = useState(new Date());
    return (
        <div className="container-prog-evento">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="prog-evento-scroll">
                <div className="conteudo-prog-evento">
                    <div className="prog-evento__header">
                        <h2>Programação</h2>
                        <p>Adicione a programação do seu evento, quanto mais precisos forem os dados da sua programação, mais confiança o seu público terá em você.</p>
                    </div>

                    <div className="programacao-calendario">
                        <div className="prog-evento__form">
                            <CampoForm id='data-prog-evento' tipo='text' legenda='Digite a data do evento' tamanhoCampo='100%' tituloForm="Data do evento" />
                            <CampoForm id='hora-inic-prog-evento' tipo='text' legenda='Digite o horário em que o evento iniciará' tamanhoCampo='100%' tituloForm="Horário de início" />
                            <CampoForm id='data-fim-prog-evento' tipo='text' legenda='Digite o horário em que o evento terminará' tamanhoCampo='100%' tituloForm="Horário de fim" />
                            <span>Sábado, 20 de Jul, 15h às 17h</span>
                        </div>
                        <div className="prog-evento__calendar">
                            <Calendar
                                onChange={setDate}
                                value={date}
                            />
                        </div>
                    </div>
                    
                    <div className="prog-evento__botao">
                        <Link to="/descricao-evento">
                            <span>Voltar</span>
                        </Link>
                        <Link to="/localizacao-evento">
                            <BotaoLaranja
                                legendaBotao="Avançar"
                                larguraBotao="150px"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>  
    )
}