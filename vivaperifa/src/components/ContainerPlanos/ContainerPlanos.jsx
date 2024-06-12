import Plano from './Plano/Plano';
import './ContainerPlanos.css';

export default function ContainerPlanos(){
    const planoBasico = [
        {
            id: 1,
            beneficio: "Cadastrar evento"
        },
        {
            id: 2,
            beneficio: "Acesso a comunidade"
        }
    ];

    const planoPremium = [
        {
            id: 1,
            beneficio: "Plano básico"
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
        },
        {
            id: 2,
            beneficio: "Enquete de perguntas"
        }
    ];

    return(
        <div className='container-plano'>
           <div className='fundo-plano'>
                <Plano
                    tipoPlano="Básico"
                    valorPlano="Gratuito"
                    listaBeneficios={planoBasico}
                />

                <Plano
                    tipoPlano="Premium"
                    valorPlano="39,90"
                    periodoPlano="/Mensal"
                    listaBeneficios={planoPremium}
                />

                <Plano
                    tipoPlano="Premium"
                    valorPlano="429,90"
                    periodoPlano="/Anual"
                    listaBeneficios={planoPremium}
                />
           </div>

        </div>
    );
}