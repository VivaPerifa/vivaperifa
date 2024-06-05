import { TbBrandLinktree } from 'react-icons/tb';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import './FormFaleConosco.css';
import Botao from '../Botao/Botao';
import CampoForm from '../CampoForm/CampoForm';
import MuroVivaPerifa from '../../assets/muro_viva_perifa.png';

export default function FormFaleConosco() {
    return (
        <div className='container-fale-conosco'>
            <div className='form-img'>

                <div className='form-contato'>
                    <div className='fale-conosco'>

                        <div className='titulo-fale-conosco'>
                            <div className='title-fale-conosco'>
                                <h2>
                                    Bora trocar uma ideia?
                                </h2>
                            </div>
                            <div className='message-fale-conosco'>
                                <h4>
                                    Quer trocar uma ideia com a gente? Manda ver no formúlario aí embaixo. Estamos aqui para fortalecer a quebrada junto com você.
                                </h4>
                            </div>
                        </div>

                        <div className='formulario-fale-conosco'>
                            <form action=''>
                                <CampoForm id='nome' tipo='text' legenda='Nome' tamanhoCampo='40vw' />

                                <div className='email-tel'>
                                    <CampoForm id='email' tipo='text' legenda='Email' tamanhoCampo='19.7vw' />

                                    <CampoForm id='telefone' tipo='text' legenda='Telefone' tamanhoCampo='19.7vw' />
                                </div>

                                <CampoForm id='assunto' tipo='text' legenda='Assunto' tamanhoCampo='40vw' />

                                <CampoForm id='mensagem' tipo='text' legenda='Mensagem' tamanhoCampo='40vw' />

                                <Botao espacamento='10px' corFundo="#F28705" legenda='Enviar' tamanhoFonte='1.5rem' largura='40vw' bordaRaio='20px' />
                            </form>
                        </div>
                    </div>

                    <div className='icones-contato'>

                        <div className='linktree'>
                            <TbBrandLinktree style={{ width: '2rem', height: '2rem' }} />
                            <div className='link'>
                                <span className='bold-icon'>LINKTREE</span>
                                <span className='gradient-icon'> <a href='https://linktr.ee/vivaperifa' target="_blank">https://linktr.ee/vivaperifa</a> </span>
                            </div>
                        </div>

                        <div className='email'>
                            <HiOutlineMailOpen style={{ width: '2rem', height: '2rem' }} />
                            <div className='link'>
                                <span className='bold-icon'>EMAIL</span>
                                <span className='gradient-icon'>contatovivaperifa@gmail.com</span>
                            </div>
                        </div>

                        <div className='telefone'>
                            <FiPhoneCall style={{ width: '2rem', height: '2rem' }} />
                            <div className='link'>
                                <span className='bold-icon'>TELEFONE</span>
                                <span className='gradient-icon'>11 95830 0920</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='img-muro'>
                    <img src={MuroVivaPerifa}/>
                </div>

            </div>

        </div>
    )
}