import { Card, CardContent, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import "./map.scss";
import { AvarageMapDataResponse,AvaregeMapData } from "../../model/AvaregeMapData";

const processSensorData = (data:AvarageMapDataResponse[]):AvaregeMapData[] => {
  // Object to store the aggregated data
  const regionData = {} as any;

  // Iterate over the data to aggregate it by region
  data.forEach((item) => {
    const region = item.region;
    const sensors = item.totalSensor;
    const { avgTemp, avgUmd } = item.detail[0];

    // Initialize the region data if not present
    if (!regionData[region]) {
      regionData[region] = { totalSensors: 0, totalTemp: 0, totalUmd: 0, count: 0 };
    }

    // Aggregate the data
    regionData[region].totalSensors += sensors;
    regionData[region].totalTemp += avgTemp * sensors;
    regionData[region].totalUmd += avgUmd * sensors;
    regionData[region].count += sensors;
  });

  // Convert the aggregated data to the desired format
  return Object.keys(regionData).map((region) => ({
    id: region.toLowerCase(),
    sensors: regionData[region].totalSensors,
    avgTemperature: Number((regionData[region].totalTemp / regionData[region].count).toFixed(2)),
    avgUmidity: Number((regionData[region].totalUmd / regionData[region].count).toFixed(2)),
  }));
};

export default function Map() {
 const [id, setId] = useState("Região");
  const [sensors, setSensor] = useState(0);
  const [avgTemperature, setAvgTemperature] = useState(0.0);
  const [avgUmidity, setAvgUmidity] = useState(0.0);

  const responseAvarageMaps = useQuery({
    queryKey: ["averageMaps"],
    queryFn: () => fetch(`http://ufmawmobr.online/client/findAverageMaps`).then(res => res.json()),
  });

  // Armazene os dados processados em um estado
  const [processedData, setProcessedData] = useState<AvaregeMapData[]>([]);

  // Atualize os dados processados quando a resposta for recebida
  useEffect(() => {
    if (responseAvarageMaps.status === 'success') {
      const data = processSensorData(responseAvarageMaps.data);
      setProcessedData(data as AvaregeMapData[]);
    }
  }, [responseAvarageMaps.data, responseAvarageMaps.status]);

  function handleEnter(e:any) {
    const regionData = processedData.find(item => item.id === e.target.id);
    console.log(regionData)
    if (regionData) {
      if(regionData.id === "n"){
        setId("norte")
      }
      if(regionData.id === "ne"){
        setId("nordeste")
      }
      if(regionData.id === "co"){
        setId("centro-oeste")
      }
      if(regionData.id === "se"){
        setId("sudeste")
      }
      if(regionData.id === "s"){
        setId("sul")
      }
      setSensor(regionData.sensors);
      setAvgTemperature(regionData.avgTemperature);
      setAvgUmidity(regionData.avgUmidity);
    }
  }
  
  
  return (
    <div className="mainMap">
      <div className="map">
        <div className="grid">
          <div className="region" id="n" onMouseEnter={handleEnter}></div>
          <div
            className="region"
            id="ne"
            onMouseEnter={handleEnter}
          ></div>
        </div>
        <div className="grid">
          <div
            className="region"
            id="co"
            onMouseEnter={handleEnter}
          ></div>
          <div className="region" id="se" onMouseEnter={handleEnter}></div>
        </div>
        <div className="grid">
          <div className="region" id="s" onMouseEnter={handleEnter}></div>
        </div>
      </div>
      <div className="list">
        {responseAvarageMaps.isPending ? (
          <Card variant="outlined" sx={{ minWidth: 400 }}>
            <CardContent>
            <Typography variant="h5" component="div">
              <p>Carregando...</p>
            </Typography>
            </CardContent>
          </Card>
        ) : (
          <Card variant="outlined" sx={{ minWidth: 400 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              <p>{id}</p>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Sensores Ativos: {sensors}
            </Typography>
            <Typography variant="body2">
              Temperatura média: {avgTemperature}
              <br />
              Úmidade média: {avgUmidity}
            </Typography>
          </CardContent>
        </Card>
        )}
      </div>
      <img className="directions" src="public/directions.png" />
    </div>
  );
}
