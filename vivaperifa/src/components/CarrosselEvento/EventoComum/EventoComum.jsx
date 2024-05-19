import './EventoComum.css';

export default function EventoComum(){
    return(

        <div className="container-evento">

          <div className="evento-comum">
 
               <figure className="imagem-evento-comum">
                          
                          <img src="" alt="" />

               </figure>

               <div className="titulo-evento-comum">

                    <h2>
                        Tenda de historia
                    </h2>

                    <span>
                        calendario
                    </span>

                    <span>
                        coracao
                    </span>

               </div>

               <div className="data-evento-comum">

                     <span>
                        data
                     </span>

               </div>

               <div className='descricao-evento-comum'>

                  <p>
                    descricao
                  </p>

               </div>

               <div className='local-evento-comum'>

               <span>
                    local
               </span>

               </div>
 
          </div>

        </div>
    )
}