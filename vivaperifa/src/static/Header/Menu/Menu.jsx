import './Menu.css';
import Logo from '../../../assets/logo.png';
import { IoIosSearch } from "react-icons/io";
import User from '../../../assets/user.png';

export default function Menu(){
    return (
        <div className="container-menu">
            <nav className="menu">
                <ul className="list-menu">
                    <li className='logo'>
                        <img src={Logo} alt="" />
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Explorar
                    </li>
                    <li>
                        Comunidade
                    </li>
                    <li>
                        Sobre nós
                    </li>
                    <li>
                        Contato
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