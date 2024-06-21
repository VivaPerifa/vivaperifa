import FormFaleConosco from '../../components/FormFaleConosco/FormFaleConosco';
import './Contato.css';
import Menu from '../../static/Menu/Menu';

export default function Contato(){
    return (
        <div className='contato'>
            <Menu corFundo="var(--cor-azul)"></Menu>
            <FormFaleConosco/>
        </div>
    );
}