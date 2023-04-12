import Sobre from '../components/Sobre'
import '../style/Section.css'
import MinhaImagem from '../style/img/lucas.jpeg';
function Section(){
return(
    <div className='container_section'>
    <section className='section'>
    <Sobre/>
    </section>
    <div className="cardImage">
    <img src={MinhaImagem} alt="Minha Imagem" />
        </div>
    </div>
)
}
export default Section