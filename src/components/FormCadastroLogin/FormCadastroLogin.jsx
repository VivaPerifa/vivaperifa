import './FormCadastroLogin.css';
import { switchForm } from '../../utils/utils';

export default function FormCadastroLogin() {

    return (
      <div className='container-cadastro-login'>
          <form>
            <h2>Login</h2>
            <button onClick={switchForm}>Organizador</button>
          </form>
      </div>
    );
  }