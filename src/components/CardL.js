import '../style/CardL.css'


function CardL({imagem, linguagem, sobre, titulo,link}) {
  
    return (
      <div className="CardL">
        
        <h3 className='tituloL'>{titulo}</h3>
        <div className="TextoL">
          <h5>{sobre}</h5>
        </div>
        
        <div className="textolingL">
        
          <ul>
            {linguagem.map(linguagem => (
              <li>{linguagem}</li>
            ))}
          </ul>
          
        </div>
        
        <div className="imgL">
        <a href={link}target={"_blank"}>
          {imagem}
          </a>
        </div>
  
     
      </div>
      
    );
  }
  
  export default CardL;