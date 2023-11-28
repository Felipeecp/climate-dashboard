import { useQuery } from "@tanstack/react-query";
import { ClimateData } from "../model/ClimateData";

const mapToPieChartData = (apiResponse:ClimateData[]) => {
  const colorMapping = {
    "Quente e Seco": "#0088FE",
    "Quente e Úmido": "#00C49F",
    "Frio e Seco": "#FFBB28",
    "Frio e Úmido": "#FF8042"
  };

  const pieChartData = apiResponse.map(item => ({
    name: item.classe,
    value: item.quantidade,
    color: (colorMapping as any)[item.classe]
  }));

  return pieChartData;
}

export const getPieChartData = () => {
  const responseChartData = useQuery({
    queryKey: [`climateData`],
    queryFn: () =>
      fetch(
        `http://143.244.149.136:57655/client/sensorDetail/weatherClassification`
      )
        .then((res) => res.json())
        .then(data => mapToPieChartData(data)),
  });

  return responseChartData;
};