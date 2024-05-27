import FiltroPesquisa from "./FiltroPesquisa/FiltroPesquisa";
import Header from '../../static/Header/Header';
import './Explorar.css';
import CarrosselEvento from "../../components/CarrosselEvento/CarrosselEvento";
import DisclaimerImpulsionarEvento from "../../components/DisclaimerImpulsionarEvento/DisclaimerImpulsionarEvento";

export default function Explorar(){
    const filtros = [
        {
            nomeFiltro: 'feira de artesanato',
            corFiltro: 'var(--cor-azul)'
        },
        {
            nomeFiltro: 'fábrica de cultura',
            corFiltro: 'var(--cor-rosa)'
        },
        {
            nomeFiltro: 'oficina de dança',
            corFiltro: 'var(--cor-laranja)'
        },
        {
            nomeFiltro: 'oficina de música',
            corFiltro: 'var(--cor-azul)'
        },
        {
            nomeFiltro: 'batalhas de rima',
            corFiltro: 'var(--cor-vermelha)'
        },
        {
            nomeFiltro: 'saraus',
            corFiltro: 'var(--cor-laranja)'
        },
    ];

    return (
        <div className="container-explorar">
            <Header
                tipoCabecalho="explorar"
            />

            <div className="filtros-explorar">
                {
                    filtros.map((item) => (
                        <FiltroPesquisa 
                            nomeFiltro={item.nomeFiltro}
                            corFiltro={item.corFiltro}
                        />
                    ))
                }
            </div>
            <CarrosselEvento
                tituloCarrossel="acontece na zona leste"
            />
            <CarrosselEvento
                tituloCarrossel="acontece na zona sul"
            />
            <CarrosselEvento
                tituloCarrossel="acontece na zona oeste"
            />
            <CarrosselEvento
                tituloCarrossel="acontece na zona central"
            />

            <DisclaimerImpulsionarEvento></DisclaimerImpulsionarEvento>
        </div>
    );
}