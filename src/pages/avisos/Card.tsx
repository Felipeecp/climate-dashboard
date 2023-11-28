import CardInfo from '../../components/cardInfo/CardInfo'
import './card.scss'

const Avisos = () => {
  return (
    <>
    <h1>Equipe</h1>
    <div className='avisos-container'>
    <CardInfo
        src='public/miqueias.jpg'
        alt='miqueias foto'
        name='miquéias pereira coelho'
        dev='frontend'
        linkedin='https://www.linkedin.com/in/miqu%C3%A9ias-pereira-coelho-8a0071218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        github='https://github.com/miqueiaspcoelho'
        graduation='Bacharel em Ciência e Tecnologia (UFMA) | Graduando em Engenharia da Computação (UFMA)'
        />
      <CardInfo
        src='public/clebson.jpg'
        alt='clebson foto'
        name='Clebson Mendonça Machado'
        dev='backend'
        linkedin='https://www.linkedin.com/in/clebson-mendon%C3%A7a-m-s?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        github='https://github.com/clebemachado'
        graduation='Bacharel em Ciência e Tecnologia (UFMA) | Graduando em Engenharia da Computação (UFMA)'
      />
      <CardInfo
        src='public/luiz.jpeg'
        alt='luiz foto'
        name='Luiz Felipe Silva Santos'
        dev='fullstack'
        linkedin='https://www.linkedin.com/in/felipeecp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        github='https://github.com/Felipeecp'
        graduation='Bacharel em Ciência e Tecnologia (UFMA) | Graduando em Engenharia da Computação (UFMA)'
      />
    </div>
    </>
  )
}

export default Avisos