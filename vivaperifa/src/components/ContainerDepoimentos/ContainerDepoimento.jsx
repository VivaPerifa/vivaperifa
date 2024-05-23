import Depoimento from '../ContainerDepoimentos/Depoimento/Depoimento';
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';
import './ContainerDepoimento.css';
import Neguinha from '../../assets/fotoUsuario.png';

export default function ContainerDepoimento(){
    const listDepoimento = [
        {
            tituloDepoimento: "To amando",
            descricaoDepoimento: " VivaPerifa é incrível! Encontrei diversos eventos culturais na minha  região que nem sabia que existiam. É uma plataforma que fortalece a cultura local.",
            nomeUsuario:"Ana Beatriz",
            tipoUsuario:"usuario",
            fotoUsuario: {Neguinha}
        },
        {
            tituloDepoimento: "To Prático e Intuitivo",
            descricaoDepoimento: "Como organizador de eventos, o VivaPerifa foi uma ótima escolha para  promover nossas iniciativas na periferia. A plataforma é fácil de usar e  nos ajudou a alcançar um público mais amplo",
            nomeUsuario:"Carlos Soares",
            tipoUsuario:"Organizador",
            fotoUsuario: "foto"
        },
        {
            tituloDepoimento: "Essencial!",
            descricaoDepoimento: "O VivaPerifa é uma ferramenta essencial para quem quer se manter  atualizado sobre o que está acontecendo nas periferias.",
            nomeUsuario:"João Kaique",
            tipoUsuario:"usuario",
            fotoUsuario: "foto"
        },
        {
            tituloDepoimento: "Inclusivo",
            descricaoDepoimento: "Adoro a proposta inclusiva do VivaPerifa! Encontrei eventos  diversificados e pude participar de iniciativas que antes desconhecia. É  uma plataforma que realmente valoriza a comunidade",
            nomeUsuario:"Igor Manuel",
            tipoUsuario:"usuario",
            fotoUsuario: "foto"
        },
        {
            tituloDepoimento: "Ótimos Recursos!",
            descricaoDepoimento: "VivaPerifa oferece uma variedade impressionante de recursos que  tornam a experiência do usuário excepcional.É  uma plataforma que realmente valoriza a comunidade",
            nomeUsuario:"Raquel Oliveira",
            tipoUsuario:"usuario",
            fotoUsuario: "foto"
        }
    ]

    return( 
        <div className='container-depoimentos'>
            
            {
                listDepoimento.map((item)=>(
                    <div className='item-depoimento'>
                        <Depoimento tituloDepoimento={item.tituloDepoimento} descricaoDepoimento={item.descricaoDepoimento} nomeUsuario={item.nomeUsuario} tipoUsuario={item.tipoUsuario}
                        fotoPerfil={Neguinha}></Depoimento>
            
                    </div>
                ))
            }
        </div>
    )
}