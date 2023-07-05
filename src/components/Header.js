import '../style/Header.css'

function Header(){
    const handleClickSobre = () => {
        window.scrollTo({
          top: 850,
          behavior: "smooth"
        });
      };
    
      const handleClickProjetos = () => {
        window.scrollTo({
          top: 1850,
          behavior: "smooth"
        });
      };
    
      const handleClickContato= () => {
        window.scrollTo({
          top: 850,
          behavior: "smooth"
        });
      };
    return(
        <>
    <header className="header">
    <ul className="header--menu_one">
        <li onClick={handleClickProjetos} className="header--menu_itens">Projetos</li>
        <li onClick={handleClickContato} className="header--menu_itens">Contato</li>
        <li onClick={handleClickSobre} className="header--menu_itens">Sobre</li>
        </ul>
        <ul className="header--menu_two">
            <li className="header--logo">Portfólio</li>
        </ul>
        
    </header>
    
    </>
    )
}
export default Header;