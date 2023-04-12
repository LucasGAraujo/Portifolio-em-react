import '../style/Card.css'




function Card({imagem, linguagem, sobre,titulo}){
    return(
        <div className="Card slide-card">
            <h3 className="titulo">{titulo}</h3>
            
            <div className="img">
                {imagem}
            </div>
            
            <div className="textoling">
            <ul>
             {linguagem.map((linguagen) => (
            <li>{linguagen}</li>
            ))}
        </ul>
        
            </div>
            <div className="Texto">
                <h5>{sobre}</h5>
            </div>
            
            

        </div>
    )
}
export default Card