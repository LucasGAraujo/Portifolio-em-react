import CardRepository from "./CardRepository"
import '../style/Repository.css'


function Repository(){
    return(
        <>
<div className='Github'>
        <CardRepository link={'https://github.com/LucasGAraujo/CarGallery100'}nome={'CarGallery'} sobre={'Projeto desenvolvido na Infnet'} lingua={'javaScript'}/>
        <CardRepository link={'https://github.com/LucasGAraujo/ContaBancariaC'} nome={'Conta Bancaria'} sobre={'Projeto desenvolvido na Infnet no console'} lingua={'C#'}/>
        <CardRepository link={'https://github.com/LucasGAraujo/RedSocialCompleto'} nome={'Rede Social'} sobre={'Projeto desenvolvido na Infnet'} lingua={'C# Html'}/>
        <CardRepository link={'https://github.com/LucasGAraujo/RedeSocialConsole'} nome={'Rede Social Console'} sobre={'Projeto desenvolvido na Infnet no Console'} lingua={'C#'}/> 
        </div>
        
    </>
    )
}
export default Repository
