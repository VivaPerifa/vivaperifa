export default function ProgramacaoEvento(props) {
    return (
        <div className="programacao-evento">
            <div className="titulo-programacao">
                <h1>programação</h1>
            </div>
            <div className="Data-Programacao">
                <h2>Programação</h2>
                {props.dataProgramacao}
            </div>
            <div className="Telefone-Programacao">
                <h2>Localização</h2>
                {props.telefoneProgramacao}
            </div>
            <div className="Mapa-Programacao">
                <h2>Telefone</h2>
                {props.mapaProgramacao}
            </div>
        </div>
    );
}