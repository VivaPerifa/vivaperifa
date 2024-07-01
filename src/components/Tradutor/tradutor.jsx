import './tradutor.css';
import React from 'react';
import EUA from '../../assets/bandeira_eua.png';
import Brasil from '../../assets/bandeira_brasil.png';
import { useTranslation } from 'react-i18next';

const Tradutor = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='btn_translate'>
      <div className="btn_brasil">
        <img src={Brasil} alt="Bandeira do Brasil" className='br' onClick={() => changeLanguage('pt')} />
      </div>
      <div className="btn_eua">
        <img src={EUA} alt="Bandeira dos EUA" className='us' onClick={() => changeLanguage('en')} />
      </div>
    </div>
  );
};

export default Tradutor;