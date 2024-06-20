import React, { useState } from 'react';
import './VisibilidadeEvento.css';
import MenuLateralPerfil from '../../MenuLateralPerfil/MenuLateralPerfil';
import { Link } from 'react-router-dom';
import BotaoLaranja from '../../../../components/BotaoLaranja/BotaoLaranja';

export default function VisibilidadeEvento() {
    const [privacidade, setPrivacidade] = useState('publico');

    const handleChangePrivacidade = (novaPrivacidade) => {
        setPrivacidade(novaPrivacidade);
    };

    return (
        <div className="container-visibilidade-evento">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="visibilidade-evento-scroll">
                <div className="conteudo-visibilidade-evento">
                    <div className="visibilidade-evento__header">
                        <h2>Visibilidade</h2>
                        <p>Escolha quando publicar e quem poderá ver o seu evento.</p>
                    </div>

                    <div className="visibilidade-evento__quadrado">
                        <div className="visibilidade-evento__opcoes">
                            <OpcaoPrivacidade
                                tipo="Privado"
                                descricao="Seu evento estará disponível apenas para você e pessoas que você escolher"
                                privacidade={privacidade}
                                handleChangePrivacidade={handleChangePrivacidade}
                            />
                            <OpcaoPrivacidade
                                tipo="Não listado"
                                descricao="Seu evento estará disponível para aqueles que tiverem o link"
                                privacidade={privacidade}
                                handleChangePrivacidade={handleChangePrivacidade}
                            />
                            <OpcaoPrivacidade
                                tipo="Público"
                                descricao="Seu evento estará disponível para todos"
                                privacidade={privacidade}
                                handleChangePrivacidade={handleChangePrivacidade}
                            />
                        </div>
                    </div>

                    <div className="visibilidade-evento__botao">
                        <Link to="/localizacao-evento">
                            <span>Voltar</span>
                        </Link>
                        <Link to='/visualizar-evento'>
                            <BotaoLaranja
                                legendaBotao="Avançar"
                                larguraBotao="150px"
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

function OpcaoPrivacidade({ tipo, descricao, privacidade, handleChangePrivacidade }) {
    return (   
        <div className="opcao" onClick={() => handleChangePrivacidade(tipo)}>
            <div className="opcao__bolinha">
                <span className={`bolinha ${privacidade === tipo ? 'ativo' : ''}`}></span>
            </div>
            <div className="opcao__titulo">
                <span>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</span>
                <div className="opcao__descricao">
                    {descricao}
                </div>
            </div>
        </div>
    );
}
