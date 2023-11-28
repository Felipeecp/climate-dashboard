import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getChartData } from "../../api/getChartBoxData";
import { getTopBoxData } from "../../api/getTopBoxData";
import { BigChartBox } from "../../components/bigChartBox/BigChartBox";
import { ChartBox } from "../../components/chartBox/ChartBox";
import { PieChartBox } from "../../components/pieChartBox/PieChartBox";
import { TopBox } from "../../components/topBox/TopBox";
import "./home.scss";
import { CharBoxData } from "../../model/CharBoxData";

const Home = () => {
  const responseTopBoxData = getTopBoxData();
  const reponseTopSensorData = responseTopBoxData.data;
  let topSensorData =
    reponseTopSensorData !== undefined ? reponseTopSensorData : [];

  const [_, setBigChartData] = useState(null);

  let codWmo = topSensorData.map((sensor) => sensor.wmo);
  let codWmoA = codWmo[0];
  let codWmoB = codWmo[1];
  const responseBigChart = useQuery({
    queryKey: ["temperatures", codWmoA, codWmoB],
    queryFn: () =>
      fetch(
        `http://ufmawmobr.online/client/sensorDetail/ultimosDados/temperatures?sensorACode=${codWmoA}&sensorBCode=${codWmoB}`
      ).then((res) => res.json()),
    enabled: codWmoA !== undefined && codWmoB !== undefined,
  });

  useEffect(() => {
    if (responseBigChart.data) {
      setBigChartData(responseBigChart.data);
    }
  }, [responseBigChart.data]);

  console.log(codWmo);
  let responseChartData1 = null;
  let responseChartData2 = null;
  let responseChartData3 = null;
  let responseChartData4 = null;
  const cores = ["#8884d8", "skyblue", "teal", "gold"];
  if (codWmo !== undefined) {
    responseChartData1 = getChartData(codWmo[0], cores[0]);
    responseChartData2 = getChartData(codWmo[1], cores[1]);
    responseChartData3 = getChartData(codWmo[2], cores[2]);
    responseChartData4 = getChartData(codWmo[3], cores[3]);
  }

  console.log(responseChartData1?.data);
  console.log(responseChartData2?.data);
  console.log(responseChartData3?.data);
  console.log(responseChartData4?.data);

  return (
    <div className="home">
      <div className="box box1">
        {responseTopBoxData.isPending ? (
          <h1>Loading...</h1>
        ) : (
          <TopBox {...topSensorData} />
        )}
      </div>
      <div className="box box2">
        {responseChartData1?.isPending ? (
          <h1>Loading...</h1>
        ) : (
          <ChartBox {...responseChartData1?.data as CharBoxData} />
        )}
      </div>
      <div className="box box3">
        {responseChartData2?.isPending ? (
          <h1>Loading...</h1>
        ) : (
          <ChartBox {...responseChartData2?.data  as CharBoxData} />
        )}
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        {responseChartData3?.isPending ? (
          <h1>Loading...</h1>
        ) : (
          <ChartBox {...responseChartData3?.data  as CharBoxData} />
        )}
      </div>
      <div className="box box6">
        {responseChartData4?.isPending ? (
          <h1>Loading...</h1>
        ) : (
          <ChartBox {...responseChartData4?.data  as CharBoxData} />
        )}
      </div>
      <div className="box box7">
        {responseBigChart?.isPending ? (
          <h1>Loading...</h1>
        ) : (
          <BigChartBox {...responseBigChart?.data} />
        )}
      </div>
    </div>
  );
};

export default Home;
