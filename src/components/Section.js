import Sobre from '../components/Sobre'
import Formulario from '../components/Formulario'
import '../style/Section.css'
import MinhaImagem from '../style/img/lucas.jpeg';
function Section(){
return(
    <div className='container_section'>
        <div className='one_section'><div className="cardImage">
    <img src={MinhaImagem} alt="Minha Imagem" />
        </div>
    <section className='section'>
    <Sobre/>
    </section></div>
    <div className='two_section'>
        <Formulario/>
    </div>
        
    </div>
)
}
export default Section