import "./map.scss";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  CardMedia,
  CardActionArea,
  Button,
  CardActions,
} from "@mui/material";

export default function Map() {
  const [id, setId] = useState("Estado");
  const [sensor, setSensor] = useState("Sensores");
  const [info, setInfo] = useState("Frases Célebres");
  const [author, setAuthor] = useState("Autores");
  const [url, setUrl] = useState("public/directions.png");
  const [alt, setAlt] = useState("Rosa dos ventos");
  const [href, setHref] = useState("");
  const [svgText, setSvgText] = useState(null);
  const [users, setUsers] = useState([]);

  //testando umas ideias
  const teste = ["MA","TO"];

  const R = [
    {
      id: "MA",
      sensors: 40,
      info: "Na laranja e na couve...",
      author: "Luiz Bacellar",
      url: "https://www.cidadeecultura.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/03/tacaca-belem-pa-bruna-brandao.jpg.webp",
      alt: "Região Norte",
      href: "https://www.google.com/search?q=regiao+norte+brasil",
    },
    {
      id: "nordeste",
      sensors: 60,
      info: "Minha terra tem palmeiras...",
      author: "Gonçalves Dias",
      url: "https://www.voltologo.net/wp-content/uploads/2023/02/centro-historico-de-sao-luis-dicas.jpg",
      alt: "Região Nordeste",
      href: "https://www.google.com/search?q=regiao+nordeste+brasil",
    },
    {
      id: "centro-oeste",
      sensors: 20,
      info: "Poeta não é somente o que escreve...",
      author: "Cora Coralina",
      url: "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2019/04/roteiro-brasilia-home.jpg",
      alt: "Região Centro-Oeste",
      href: "https://www.google.com/search?q=regiao+centro-oeste+brasil",
    },
    {
      id: "sudeste",
      sensors: 10,
      info: "Tentei, porém nada fiz...",
      author: "Cecília Meireles",
      url: "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg",
      alt: "Região Sudeste",
      href: "https://www.google.com/search?q=regiao+sudeste+brasil",
    },
    {
      id: "sul",
      sensors: 15,
      info: "Sonhar é acordar-se para dentro.",
      author: "Mário Quintana",
      url: "https://media.gazetadopovo.com.br/2022/09/17194513/Gramado-tem-atrativos-o-ano-inteiro.-Vale-a-pena-conhecer-cada-pedaC3A7o-da-cidade-seja-qual-for-a-C3A9poca-da-sua-viagem.-960x540.jpg",
      alt: "Região Sul",
      href: "https://www.google.com/search?q=regiao+sul+brasil",
    },
  ];

  function handleEnter_2(event: any) {
    if (event.target.getAttribute("id") != "svg2") {
      setId(event.target.getAttribute("id"));

    } else {}
    //testando algumas ideias
    if(teste.includes(id)){
      setHref("https://www.google.com/search?q=regiao+nordeste+brasil")
      setUrl("https://www.voltologo.net/wp-content/uploads/2023/02/centro-historico-de-sao-luis-dicas.jpg")
    }
  }
  useEffect(() => {
    fetch("public/mapa4.svg")
      .then((res) => res.text())
      .then((svgText) => setSvgText(svgText));
  }, []);

//não tá indo o fetch
  const fetchUserData = () => {
    fetch("http://143.244.149.136:57655/client/findAverageMaps", {mode:'no-cors'})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
    console.log(users);
  };
  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <div className="mainMap">
      <div
        dangerouslySetInnerHTML={{ __html: svgText }}
        style={{ scale: "0.75", margin: "0", padding: "0" }}
        onMouseOver={(event) => handleEnter_2(event)}
      ></div>

      <div className="list">
        <Card variant="outlined" sx={{ minWidth: 400 }}>
          <CardHeader />
          <Button fullWidth={true} color="primary" href={href} target="__blank">
            <CardActionArea sx={{ margin: 0 }}>
              <CardMedia component="img" height="194" image={url} alt={alt} />
              <CardContent>
                <Typography variant="h5" component="div">
                  <p>{id}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Button>

          <CardContent sx={{ m: 0, p: 0 }}>
            <Typography sx={{ mb: 1.0 }} color="text.primary">
              Sensores ativos: puxar da api {/*Puxar do BackEnd*/}
              <br />
              temperatura média: puxar da api {/*Puxar do BackEnd*/}
              <br />
              temperatura máxima: puxar da api {/*Puxar do BackEnd*/}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary"></Button>
          </CardActions>
        </Card>
      </div>
      <img className="directions" src="public/directions.png" />
    </div>
  );
}
