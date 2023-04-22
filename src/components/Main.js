import '../style/Main.css'
import Animacao from './Animacao'
import Motivacional from './Motivacional'

function Main(){
    return(
    <main className="main"> 
        <Animacao/>  
        <div className='form'>
            <Motivacional/>
        </div>
    </main>
        )
    }
export default Main