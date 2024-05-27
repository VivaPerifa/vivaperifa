import './FormCadastroLogin.css';
export default function FormCadastroLogin() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      cpf: '',
      ehs_approval: false // adc estado para o checkbox
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const val = type === 'checkbox' ? checked : value; // Trate checkboxes separadamente
      setFormData(prevState => ({
        ...prevState,
        [name]: val
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      //enviar os dados do formulário para o servidor
      
      /*const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('https://seu-servidor.com/api/formulario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
      
          if (response.ok) {
            console.log('Dados enviados com sucesso!');
            //redirecionar o usuário ou exibir uma mensagem de sucesso
          } else {
            console.error('Erro ao enviar dados:', response.statusText);
            //exibir uma mensagem de erro para o usuário
          }
        } catch (error) {
          console.error('Erro ao enviar dados:', error.message);
          //tratando erros de rede ou outros erros durante o envio dos dados
        }
      };
      */
      
      console.log('Form submitted:', formData);
    };
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div>
            <label>CPF:</label>
            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
          </div>
          {/*checkbox controlado */}
          <div className="col-md-6 reject-checkbox">
            <div className="mb-2 text-center">
              <div className="checkbox-wrapper">
                <input
                  name="ehs_approval"
                  className="form-check-label custom-radio-label"
                  id="Rejected"
                  type="checkbox"
                  checked={formData.ehs_approval}
                  onChange={handleChange}
                />
                <label htmlFor="Rejected">
                  <div className="tick_mark">
                    <div className="cross"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <button className="btn-53">
            <div className="original">Viva Perifa</div>
            <div className="letters">
              <span>E</span>
              <span>N</span>
              <span>T</span>
              <span>R</span>
              <span>E</span>
              <span></span>
            </div>
          </button>
        </form>
      </div>
    );
  }