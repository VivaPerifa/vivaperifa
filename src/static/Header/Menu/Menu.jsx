import './Menu.css';
import Logo from '../../../assets/logo.png';
import { IoIosSearch } from "react-icons/io";
import User from '../../../assets/user.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

export default function Menu(props) {
    const { t } = useTranslation();
    const [showLoginOptions, setShowLoginOptions] = useState(false);
    const loginOptionsRef = useRef(null);

    const handleUserIconClick = (e) => {
        e.stopPropagation();
        setShowLoginOptions(!showLoginOptions);
    };

    const handleClickOutside = (event) => {
        if (loginOptionsRef.current && !loginOptionsRef.current.contains(event.target)) {
            setShowLoginOptions(false);
        }
    };

    useEffect(() => {
        if (showLoginOptions) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showLoginOptions]);

    return (
        <div className="container-menu" style={{ backgroundColor: props.corFundo }}>
            <nav className="menu">
                <ul className="menu__lista">
                    <div className='logo'>
                        <Link to="/home"><img src={Logo} alt="VivaPerifa" /></Link>
                    </div>
                    <li>
                        <Link to="/home">{t('menu.home')}</Link>
                    </li>
                    <li>
                        <Link to="/explorar">{t('menu.explorar')}</Link>
                    </li>
                    <li>
                        <Link to="/comunidade">{t('menu.comunidade')}</Link>
                    </li>
                    <li>
                        <Link to="/sobre-nos">{t('menu.sobre-nos')}</Link>
                    </li>
                    <li>
                        <Link to="/contato">{t('menu.contato')}</Link>
                    </li>
                    <li>
                        <Link to="/gerenciador-perfil">{t('menu.gerenciador-perfil')}</Link>
                    </li>
                </ul>
                <div className='pesquisa-user'>
                    <div className='pesquisa'>
                        <input id='search' placeholder={t('menu.campo-pesquisa')} />
                        <span>
                            <IoIosSearch
                                style={{
                                    width: '20px',
                                    height: '20px'
                                }}
                            />
                        </span>
                    </div>
                    <div className='iniciar-login'>
                        <span onClick={handleUserIconClick}>
                            <img src={User} alt="User Icon" />
                        </span>
                        {showLoginOptions && (
                            <div className='login-opcao' ref={loginOptionsRef}>
                                <Link to='/login'>{t('Entrar')}</Link>
                                <Link to='/login'>{t('Cadastrar')}</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
