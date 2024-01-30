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
        <div className='Github'>
                <CardRepository link={'https://github.com/LucasGAraujo/Projeto-Final-Firjan'} nome={'NAVSOS'} sobre={'Projeto desenvolvido no Firjan App'} lingua={'JavaScript'}/> 
                <CardRepository link={'https://github.com/LucasGAraujo/picpayTest'} nome={'PicpayTest'} sobre={'Projeto em java , test vaga'} lingua={'Java'}/> 
                        <CardRepository link={'https://github.com/LucasGAraujo/SpringBoot_Basquete'} nome={'Spring boot basquete'} sobre={'Projeto em java , test vaga'} lingua={'Java'}/> 
                                <CardRepository link={'https://github.com/LucasGAraujo/MediavelBattle'} nome={'RPG JAVA'} sobre={'Projeto em java , rpg java'} lingua={'Java'}/> 
        </div>
        <div className='Github'>
        <CardRepository link={'https://github.com/LucasGAraujo/Api_Rick-and-Morty'} nome={'Api Rick and Morty JAVA'} sobre={'Projeto em java , api java'} lingua={'Java'}/> 
                       <CardRepository link={'https://github.com/LucasGAraujo/CrudComDb_emJava'} nome={'Crud com banco de dados'} sobre={'Projeto em java , Crud com Db java'} lingua={'Java'}/> 
                               <CardRepository link={'https://github.com/LucasGAraujo/PETCURY'} nome={'PETCURY'} sobre={'Projeto em java , VETERINARIO'} lingua={'Java'}/> 
        </div>
    </>
    )
}
export default Repository
