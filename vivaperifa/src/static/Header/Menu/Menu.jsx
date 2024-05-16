import './Menu.css';
import Logo from '../../../assets/logo.png';

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
                </ul>
            </nav>
        </div>

    );
}