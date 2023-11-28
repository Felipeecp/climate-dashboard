import './cardinfo.scss';
type Props = {
  src:string,
  alt:string,
  name:string,
  dev:string,
  linkedin:string,
  github:string,
  graduation:string,
}
export default function CardInfo(props:Props){
  return(
    <div className='cardInfo'>
      <h1 className='cardDev'>{props.dev}</h1>
      <div className='cardPhoto'>
        <img src={props.src} alt={props.alt} className='cardPhoto'/>
      </div>
      <ul className='cardList'>
        <li className='cardName'>{props.name}</li>
        <li className='cardText'>
          <a href={props.linkedin} target='__blank'> <img className='cardSocialMediaIcon' src='public/linkedin.svg'/>
          </a>
          <a href={props.github} target='__blank'><img className='cardSocialMediaIcon' src='public/github.svg'/>
          </a>
        </li>
        <li className='cardText'></li>
        <li className='cardText minFont'>{props.graduation}</li>
      </ul>
    </div>
  )
};