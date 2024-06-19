import PlanoComponente from './Plano/Plano.jsx';
import './ContainerPlanos.css';

export default function ContainerPlanos() {
    const planoHumildade = [
        {
            id: 1,
            beneficio: "Cadastrar evento"
        },
        {
            id: 2,
            beneficio: "Acesso a comunidade"
        }
    ];

    const planoTopDaFavela = [
        {
            id: 1,
            beneficio: "Plano Humildade"
        },
        {
            id: 2,
            beneficio: "Dashboard de análise mensal"
        },
        {
            id: 3,
            beneficio: "Eventos em destaque"
        },
        {
            id: 4,
            beneficio: "Suporte prioritário"
        },
        {
            id: 5,
            beneficio: "Notificação imediata"
        }

    ];

    return (
        <div className='container-plano'>
            <div className='fundo-plano'>
                <PlanoComponente
                    tipoPlano="Humildade"
                    valorPlano="Gratuito"
                    listaBeneficios={planoHumildade}
                />

                <PlanoComponente
                    tipoPlano="Top da Favela"
                    valorPlano="39,90"
                    periodoPlano="/Mensal"
                    listaBeneficios={planoTopDaFavela}
                />

                <PlanoComponente
                    tipoPlano="Top da Favela"
                    valorPlano="429,90"
                    periodoPlano="/Anual"
                    listaBeneficios={planoTopDaFavela}
                />
            </div>
        </div>
    );
}
