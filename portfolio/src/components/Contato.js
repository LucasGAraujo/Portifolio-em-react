import '../style/Contato.css'
import Formulario from './Formulario'
import Linkedin from '../style/img/linkedin.png'
import Git from '../style/img/github.png'
import Telefone from '../style/img/telefone.png'
import Email from '../style/img/o-email.png'
function Contato(){
    return(
        <div className="Container_contato">
            <div className='Form_contato'>
                <div className='esquerdo_contato'>
                <div className='h3_contato'><h3>Entre em contato em outra plataforma</h3></div>
                <div className='itens_name_contato'>
                <h6>TELEFONE</h6>
                <h6>LINKEDIN</h6>
                <h6>GITHUB</h6>
                <h6>EMAIL</h6>
                </div>
                <div className='item'>
                    <div className='card_contato'>
                    <img src={Telefone} />
                    </div>
                    <div className='card_contato'><img src={Linkedin} /></div>
                    <div className='card_contato'><img src={Git} /></div>
                    <div className='card_contato'><img src={Email} /></div>
                </div>
                </div>
                <div className='email'>
                    <Formulario/>
                </div>

            </div>
        </div>
    )
}
export default Contato