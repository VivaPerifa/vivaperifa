import './DisclaimerCookies.css'
import Botao from '../Botao/Botao';
import React, { useState, useEffect} from 'react';

export default function Cookies() {
    const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      setShowCookieBanner(false);
    }
  }, []);

    return (
        <div className="cookie">
            {showCookieBanner && (
                <div className='containerCookies' id='cookies-js'>
                    <div className='cookies'>
                        <div className="texto-cookies">
                            <span>Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdos de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento.</span>
                        </div>
                        <div className="btn_cookies">
                            <button onClick={handleAcceptCookies}>Aceitar</button>
                            <button>Política de Privacidade</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}