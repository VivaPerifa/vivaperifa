import Depoimento from '../ContainerDepoimentos/Depoimento/Depoimento';
import './ContainerDepoimento.css';
import Perfil5 from '../../assets/fotoUsuario.png';
import Perfil1 from '../../assets/perfil_1.png';
import Perfil2 from '../../assets/perfil_2.png';
import Perfil3 from '../../assets/perfil_3.png';
import Perfil4 from '../../assets/perfil_4.png';

export default function ContainerDepoimento(){
    const listItem = [
        {
            id:1,
            titulo: "To amando",
            descricao: " VivaPerifa é incrível! Encontrei diversos eventos culturais na minha  região que nem sabia que existiam. É uma plataforma que fortalece a cultura local.",
            nome:"Ana Beatriz",
            tipo:"Usuário",
            imagem: Perfil1
        },
        {
            id:2,
            titulo: "To Prático e Intuitivo",
            descricao: "Como organizador de eventos, o VivaPerifa foi uma ótima escolha para  promover nossas iniciativas na periferia. A plataforma é fácil de usar e  nos ajudou a alcançar um público mais amplo",
            nome:"Carlos Soares",
            tipo:"Organizador",
            imagem: Perfil2
        },
        {
            id:3,
            titulo: "Essencial!",
            descricao: "O VivaPerifa é uma ferramenta essencial para quem quer se manter  atualizado sobre o que está acontecendo nas periferias.",
            nome:"João Kaique",
            tipo:"Usuário",
            imagem: Perfil3
        },
        {
            id:4,
            titulo: "Inclusivo",
            descricao: "Adoro a proposta inclusiva do VivaPerifa! Encontrei eventos  diversificados e pude participar de iniciativas que antes desconhecia. É  uma plataforma que realmente valoriza a comunidade",
            nome:"Igor Manuel",
            tipo:"Usuário",
            imagem: Perfil4
        },
        {
            id:5,
            titulo: "Ótimos Recursos!",
            descricao: "VivaPerifa oferece uma variedade impressionante de recursos que  tornam a experiência do usuário excepcional.É  uma plataforma que realmente valoriza a comunidade",
            nome:"Raquel Oliveira",
            tipo:"Usuário",
            imagem: Perfil5
        }
    ]
    
    return( 
        <div className='container-depoimentos'>
            <div className='container-depoimentos__titulo'>
                <h2>eles curtiram você também vai!</h2>
            </div>
            <div className='depoimentos__list'>
                {
                    listItem.map((item, index) => (
                        <div className='item-depoimento' key={index}>
                            <Depoimento
                                fotoPerfil={item.imagem}
                                nomeUsuario={item.nome}
                                tipoUsuario={item.tipo}
                                descricaoDepoimento={item.descricao}
                                tituloDepoimento={item.titulo}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}