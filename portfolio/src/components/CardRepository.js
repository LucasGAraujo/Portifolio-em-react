import paste from '../style/img/folder.png'
import git from '../style/img/compartilhar.png'
function CardRepository({nome , sobre,lingua, link}){
    return(

        <div className='Github_card'><div className='Github_card_img'>
            <ul>
            <li className="paste"><img src={paste}/></li>
            <li className="Git"><a href={link} target={"_blank"}><img src={git}/></a>
                </li>
            </ul>
            <h3 className='h3_repository'>{nome}</h3>
            <p className='p_repository'>{sobre}</p>
            <div className='card_h5' ><h5>{lingua}</h5></div>
        </div>
        </div>
    )

}
export default CardRepository