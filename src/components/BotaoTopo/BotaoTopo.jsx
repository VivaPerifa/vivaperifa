import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import './BotaoTopo.css'; 

const BotaoTopo = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Faz a rolagem suave para o topo
    });
  };

  return (
    <div className="botao-topo" onClick={handleScrollToTop}>
      <IoIosArrowUp className="setinha" />
    </div>
  );
};

export default BotaoTopo;