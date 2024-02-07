import './style.css';


function ShowButtons(id){

    document.getElementById('botao-' + id).classList.toggle('button-hidden');
    document.getElementById('image-' + id).classList.toggle('img-hover');        

}


function CardProjeto(props){
    return(
        <div className='card' onClick={() => ShowButtons(props.id)}>
            <div className='imagem-projeto'>
                <img src={props.imagem} alt={props.nome} id={'image-' + props.id}/>
            </div>
            <div className="content">
                <h1>{props.nome}</h1>
                <h3>{props.tecnologias}</h3>
            </div>

            <div id={'botao-' + props.id} className='botoes button-hidden'>
                <a href={props.site} target='_blank'>Site</a>
                <a href={props.repositorio}>Repositório</a>
            </div>
        </div>
    )
}

export default CardProjeto;