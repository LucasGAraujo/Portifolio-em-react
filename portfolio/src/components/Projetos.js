import '../style/Projetos.css'
import Card from './Card'
import CardL from './CardL'
import Repository from './Repository'
import Finagc from '../style/img/finag.jpg';
import Fashion from '../style/img/fashio.jpg';
import Andar from '../style/img/natureza.jpg';
import tec from '../style/img/tec.png';
import Vet from '../style/img/estetica.jpg';

function Projetos(){

    return(<>
        <div className="Projetos">
        <h2 className='Projetosh2'>
            Projetos
        </h2>
        
        <div className='geral'>
            <Card imagem={<img src={Fashion}/>} sobre={'Esse e um projeto feito bem antigamente com o objetivo de seu uma loja, me orgulho bastante dele mas ainda tem muita coisa a atualizar'} linguagem={['Javascript','Html','Css']} titulo={'BritoFashion'} link={'https://brito-fashion.vercel.app/'}/>
            <CardL imagem={<img src={Finagc}/>} sobre={'Esse e um projeto feito para ajudar na educação financeira, me orgulho bastante dele '} linguagem={['Javascript','Html','Css']} titulo={'Finangic'}  link={'https://finangic.vercel.app/'}/>
            <Card imagem={<img src={Vet}/>} sobre={'Esse foi um projeto feito por mim, recentemente de uma clinica de estetica '} linguagem={['Javascript','Html','Css','React']} titulo={'Clinica Biancurpi'}/>
            <CardL imagem={<img src={Andar}/>} sobre={'Esse e um projeto feito com minha equipe de faculdade, o primeiro em react '} linguagem={['Javascript','Html','Css','React']} titulo={'4 andar'}/>
           
        </div>
        <h2 style={{margin:"60px 0px 30px 30px"}} className='Projetosh2'>
            Repository no GitHub
        </h2>
        <Repository/>
        </div>
           </> 
        )
    }

export default Projetos