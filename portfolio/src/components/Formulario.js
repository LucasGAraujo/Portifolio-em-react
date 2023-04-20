import '../style/Formulario.css'
import {useState} from 'react'
import emailjs from '@emailjs/browser'

function Formulario(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();
        if(name === ''|| email ===''||message ===''){
            alert("Preencha todos os campos")
            return;
        }
        const templateParams ={
            from_name:name,
            message: message,
            email: email
        }
        emailjs.send("service_azt9kg9","template_hy5f18m",templateParams, "f5Ni5jGbcf0clxAe-")
        .then((response) =>{
            console.log('Email enviado', response.status,response.text)
        setName('')
        setEmail('')
        setMessage('')
        },(error) =>{
            alert("error", error)
        })
    }

    
return(
    <div className="container">
      
    <h1 className="title">Entre em contato</h1>
    <form className="form" onSubmit={sendEmail}>
      <div className='input_foirm'><label>Digite seu Nome</label>
      <input 
        className="input"
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
          value={name}
          
      /></div>
    <div className='input_foirm'><label>Digite seu E-mail</label>
      <input 
        className="input"
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
          value={email}
       
      /></div>
      <div className='input_foirm'><label>Digite seu assunto</label>
      <textarea 
        className="textarea"
        placeholder="Digite sua mensagem..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        
      /></div>
    

      <input className="button" type="submit" value="Enviar" />
    </form>

  </div>
)
}
export default Formulario