import CarrosselEvento from "../../components/CarrosselEvento/CarrosselEvento";
import Header from "../../static/Header/Header";
import Footer from "../../static/Footer/Footer";
import ContainerPlanos from "../../components/ContainerPlanos/ContainerPlanos";
import './Home.css';
import Banner from '../../assets/banner-crescimento.png';
import DisclaimerImpulsionarEvento from "../../components/DisclaimerImpulsionarEvento/DisclaimerImpulsionarEvento";
import ContainerDepoimentos from '../../components/ContainerDepoimentos/ContainerDepoimento';
import DisclaimerCookies from '../../components/DisclaimerCookies/DisclaimerCookies';
import DisclaimerDivulgueSeuEvento from "../../components/DisclaimerDivulgueSeuEvento/DisclaimerDivulgueSeuEvento";


export default function Home(){
    return(
        <div className="container-homepage">
            <Header 
                tipoCabecalho="home"
            />

            <CarrosselEvento
                tituloCarrossel="acontece em são paulo"
            />
            <CarrosselEvento
                tituloCarrossel="adicionados recentemente"
            />

            <div className='banner-crescimento'>
                <img src={Banner} alt="Banner de crescimento tecnológico" />
            </div> 

            <DisclaimerDivulgueSeuEvento></DisclaimerDivulgueSeuEvento>

            <DisclaimerImpulsionarEvento></DisclaimerImpulsionarEvento>

            <ContainerPlanos></ContainerPlanos>

            <ContainerDepoimentos></ContainerDepoimentos>

            <DisclaimerCookies></DisclaimerCookies>
        </div>
    );
}