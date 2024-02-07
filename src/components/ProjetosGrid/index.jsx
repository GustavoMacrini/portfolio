import './style.css';
import cardData from './cardData';
import CardProjeto from '../CardProjeto';

function ProjetosGrid(){
    const cards = cardData.map(item => 
        <CardProjeto 
            id={item.id}
            imagem={item.imagem} 
            nome={item.nome} 
            tecnologias={item.tecnologias}
            site={item.site}
            repositorio={item.repositorio}
        />
    )

    return(
        <div className='projetos-cards'>            
            {cards}
        </div>
    )
}

export default ProjetosGrid;