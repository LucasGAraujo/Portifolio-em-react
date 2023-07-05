import '../style/Projetos.css'
import Card from './Card'
import CardL from './CardL'
import Repository from './Repository'
import Finagc from '../style/img/finag.jpg';
import cep from '../style/img/background.jpg';
import list from '../style/img/images122.jpg';
import Andar from '../style/img/4an.jpg';

import Vet from '../style/img/asaik.jpg';

function Projetos(){

    return(<>
        <div className="Projetos">
        <h2 className='Projetosh2'>
            Projetos
        </h2>
        
        <div className='geral'>
            <Card imagem={<img src={cep}/>} sobre={'Esse e um projeto feito bem antigamente com o objetivo de ser um buscador de cep, me orgulho bastante dele mas ainda tem muita coisa a atualizar'} linguagem={['Javascript','Html','Css', 'React']} titulo={'Buscador de cep '} link={'https://buscadordecep-plum.vercel.app/'}/>
            <CardL imagem={<img src={Finagc}/>} sobre={'Esse e um projeto feito para ajudar na educação financeira, me orgulho bastante dele '} linguagem={['Javascript','Html','Css']} titulo={'Finangic'}  link={'https://finangic.vercel.app/'}/>
            <Card imagem={<img src={Vet}/>} sobre={'Esse foi um projeto feito por mim, recentemente de um portfolio fotografico ---(Em Andamento)'} linguagem={['Javascript','Html','Css','React']} titulo={'FotoGrup'} link={"https://foto-grup.vercel.app/"}/>
            <CardL imagem={<img src={Andar}/>} sobre={'Esse e um projeto feito com minha equipe de faculdade, o primeiro em react '} linguagem={['Javascript','Html','Css','React']} titulo={'4 andar'} link={'https://quartoandar.vercel.app/'}/>
            <Card imagem={<img src={list}/>} sobre={'Lista de tarefas'} linguagem={['Javascript','Html','Css', 'React']} titulo={'Lista de tarefas'} link={'https://listatarefa-xlfs.vercel.app/'}/>
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