import FormFaleConosco from '../../components/FormFaleConosco/FormFaleConosco';
import './Contato.css';
import Menu from '../../static/Menu/Menu';
import Footer from '../../static/Footer/Footer';

export default function Contato(){
    return (
        <div className='contato'>
            <Menu corFundo="#2D2D2D"></Menu>
            <FormFaleConosco/>
            <Footer></Footer>
        </div>
    );
}