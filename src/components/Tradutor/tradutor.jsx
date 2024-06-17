import './tradutor.css';
import React from 'react';
import EUA from '../../assets/bandeira_eua.png';
import Brasil from '../../assets/bandeira_brasil.png';

const Tradutor = ({ changeLanguage }) => {
  return (
    <div className='btn_translate'>

      <div className="btn_brasil">
        <img src={Brasil} alt="" className='br' onClick={() => changeLanguage('pt')} />
      </div>

      <div className="btn_eua">
        <img src={EUA} alt="" className='us' onClick={() => changeLanguage('en')} />
      </div>

    </div>
  );
};

export default Tradutor;