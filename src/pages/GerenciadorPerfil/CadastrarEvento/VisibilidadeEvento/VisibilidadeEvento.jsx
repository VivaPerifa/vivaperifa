import React, { useState } from 'react';
import './VisibilidadeEvento.css';
import Botao from '../../../../components/Botao/Botao';

export default function VisibilidadeEvento() {
    const [privacidade, setPrivacidade] = useState('publico');

    const handleChangePrivacidade = (novaPrivacidade) => {
        setPrivacidade(novaPrivacidade);
    };

    return (
        <div className="conteudo-visibilidade">
            <div className="titulo-visibilidade">
                <h1 className='title-visibilidade'>
                    Visibilidade
                </h1>
            </div>
            <div className="texto-visibilidade">
                <p className='text-visibilidade'>
                    Escolha quando publicar e quem poderá ver o seu evento.
                </p>
            </div>

            <div className="container-quadrado-visibilidade">
                <div className="container-centralizado">
                    <div className="opcoes-privacidade">
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
                            tipo="Publico"
                            descricao="Seu evento estará disponível para todos"
                            privacidade={privacidade}
                            handleChangePrivacidade={handleChangePrivacidade}
                        />
                    </div>
                </div>

                <div className="btn-visibilidade">
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
    );
}

function OpcaoPrivacidade({ tipo, descricao, privacidade, handleChangePrivacidade }) {
    return (
        <div className="opcao" onClick={() => handleChangePrivacidade(tipo)}>
            <div>
                <span className={`bolinha ${privacidade === tipo ? 'ativo' : ''}`}></span>
                {tipo.charAt(0).toUpperCase() + tipo.slice(1)} {/* Transforma a primeira letra em maiúscula */}
            </div>
            <div className="texto-visibilidade-descricao">
                {descricao}
            </div>
        </div>
    );
}
