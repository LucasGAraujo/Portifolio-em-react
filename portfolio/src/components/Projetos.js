import '../style/Projetos.css'
import Card from './Card'
import CardL from './CardL'
import Repository from './Repository'
import Finagc from '../style/img/finag.jpg';
import Fashion from '../style/img/fashio.jpg';
import Vet from '../style/img/fundo.jpg';
import Andar from '../style/img/natureza.jpg';
import tec from '../style/img/tec.png';

function Projetos(){

    return(<>
        <div className="Projetos">
        <h2 className='Projetosh2'>
            Projetos
        </h2>
        <Repository/>
        <div className='geral'>
            <Card imagem={<img src={Fashion}/>} sobre={'Esse e um projeto feito bem antigamente com o objetivo de seu uma loja, me orgulho bastante dele mas ainda tem muita coisa a atualizar'} linguagem={['Javascript','Html','Css']} titulo={'BritoFashion'}/>
            <CardL imagem={<img src={Finagc}/>} sobre={'Esse e um projeto feito para ajudar na educação financeira, me orgulho bastante dele '} linguagem={['Javascript','Html','Css']} titulo={'Finangic'}/>
            <Card imagem={<img src={Vet}/>} sobre={'Esse foi meu primeiro projeto contei com ajuda de um grande amigo, que fez este projeto comigo'} linguagem={['Javascript','Html','Css']} titulo={'Veterinaria Bianchini'}/>
            <CardL imagem={<img src={Andar}/>} sobre={'Esse e um projeto feito com minha equipe de faculdade, o primeiro em react '} linguagem={['Javascript','Html','Css','React']} titulo={'4 andar'}/>
            <Card imagem={<img src={tec}/>} sobre={'Esse foi um projeto voltado a area tecnologica '} linguagem={['Javascript','Html','Css','React']} titulo={'TecnologonGa'}/>
        </div>
        
        </div>
           </> 
        )
    }

export default Projetos