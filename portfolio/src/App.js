import '../src/style/App.css'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import Section from '../src/components/Section'
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import '../src/style/Media.css'

function App() {
  
  return (
    <>
    <div className='teste'>
    <Header/>
    <Main/>
    </div>
    <div className="section-title"><a href="mailto:lucasdag445@gmail.com">lucasdag445@gmail.com</a></div>
    <hr className="linha" />
    <div className="section-title-direita"></div>
    <hr className="linha-direita" />
    <Section/>
    <Projetos/>
    {/* <Contato/> */}
    </>
  );
}

export default App;
