import { Chart } from "react-google-charts";
import MenuLateralPerfil from "../MenuLateralPerfil/MenuLateralPerfil";
import './DashboardPerfil.css';

export default function DashboardPerfil() {
    const dataBarra = [
        ["Elemento", "Densidade", { role: "style" }],
        ["Cliques", 8.94, "#033E8C"], // RGB value
        ["Curtidas", 15.49, "#D9043E"], // English color name
        ["Visualizações", 19.3, "#F2B705"],
        ["Comentários", 6.5, "#D90504"],
        ["Buscas pelas palavras chaves", 13.5, "#F28705"] // CSS-style declaration
    ];
    
    const dataPizza = [
        ["Analytics", "Percents"],
        ["Visitas ao perfil", 10],
        ["Feedback positivo", 8],
        ["Feedback negativo", 2],
        ["Compartilhamentos", 5],
        ["Menções", 2],
    ];

    const options = {
        title: "Análise do perfil",
    };

    return (
        <div className="container-dashboard">
            <MenuLateralPerfil></MenuLateralPerfil>
            <div className="dashboard__graficos">
                <div className="dashboard__grafico-barra">
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="100%"
                        data={dataBarra}
                    />
                </div>
                <div className="dashboard__grafico-pizza">
                    <Chart
                        chartType="PieChart"
                        data={dataPizza}
                        options={options}
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
            </div>
        </div>
    );
}