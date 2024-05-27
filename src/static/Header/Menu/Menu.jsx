import './Menu.css';
import Logo from '../../../assets/logo.png';
import { IoIosSearch } from "react-icons/io";
import User from '../../../assets/user.png';
import { Link  }from 'react-router-dom';

export default function Menu(props){
    return (
        <div className="container-menu" style={{backgroundColor: props.corFundo}}>
            <nav className="menu">
                <ul className="menu__lista">
                    <div className='logo'>
                        <img src={Logo} alt="VivaPerifa" />
                    </div>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/explorar">Explorar</Link>
                    </li>
                    <li>
                        <Link to="/comunidade">Comunidade</Link>
                    </li>
                    <li>
                        <Link to="/sobre-nos">Sobre nós</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
                <div className='pesquisa-user'>
                    <div className='pesquisa'>
                        <input id='search' placeholder='Pesquisar evento por artista, categoria, local...'></input>
                        <span>
                            <IoIosSearch
                                style={{
                                    width: '20px',
                                    height: '20px'
                                }} 
                            />
                        </span>
                    </div>
                    <div className='user'>
                        <span>
                            <img src={User} alt="" />
                        </span>
                    </div>
                </div>
            </nav>
        </div>

    );
}