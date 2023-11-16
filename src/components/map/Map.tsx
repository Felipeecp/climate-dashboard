import './map.scss'
import {useState} from 'react';
import { Card,CardContent,Typography } from '@mui/material';

export default function Map(){ 
  const [id, setId] = useState('Região');
  const [sensor,setSensor] = useState('Sensores');
  const [info, setInfo] = useState('Frases Célebres');
  const [author,setAuthor] = useState('Autores');
  
  const R = [
    {
      id: 'norte',
      sensors:40,
      info:'Na laranja e na couve...',
      author:'Luiz Bacellar',
    },
    {
      id:'nordeste',
      sensors:60,
      info:'Minha terra tem palmeiras...',
      author:'Gonçalves Dias',
    },
    {
      id:'centro-oeste',
      sensors:20,
      info:'Poeta não é somente o que escreve...',
      author:'Cora Coralina',
    },
    {
      id:'sudeste',
      sensors:10,
      info:'Tentei, porém nada fiz...',
      author:'Cecília Meireles',
    },
    {
      id:'sul',
      sensors:15,
      info:'Sonhar é acordar-se para dentro.',
      author:'Mário Quintana',
    }
  ];
  function handleEnter(e) {
    setId(e.target.id);
    setSensor(R.find(item => item.id === e.target.id).sensors);
    setInfo(R.find(item => item.id === e.target.id).info);
    setAuthor(R.find(item => item.id === e.target.id).author);
    
  }

  return(
    <div className='mainMap'>
      
      <div className='map'>
        
        <div className='grid'>
          <div className='region'  id='norte' onMouseEnter={handleEnter}></div>
          <div className='region'  id='nordeste' onMouseEnter={handleEnter}></div>
        </div>
        <div className='grid'>
          <div className='region'  id='centro-oeste' onMouseEnter={handleEnter}></div>
          <div className='region'  id='sudeste' onMouseEnter={handleEnter}></div>
        </div>
        <div className='grid'>
          <div className='region'  id='sul' onMouseEnter={handleEnter}></div>
        </div>
       
    
      </div>
      <div className='list'>
        <Card variant="outlined" sx={{ minWidth: 400 }}>
          <CardContent>
            
            <Typography variant="h5" component="div">
              <p>{id}</p>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Sensores Ativos: {sensor}
            </Typography>
            <Typography variant="body2">
              {info}
              <br />
              {author}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <img className='directions' src='public/directions.png'/>
    </div>
    

    
  );
}