import { useQuery } from "@tanstack/react-query";
import { LastSensorData } from "../model/LastSensorData";

export const mapTochartBoxData = (dataInput: LastSensorData,cor:string,codWmo:string) => {
  // Mapeando os nomes dos dias para abreviações em inglês
  const dayMap = {
    "segunda-feira": "Mon",
    "terça-feira": "Tue",
    "quarta-feira": "Wed",
    "quinta-feira": "Thu",
    "sexta-feira": "Fri",
    sábado: "Sat",
    domingo: "Sun",
  };

  // Convertendo os dados para o formato do gráfico
  let chartData = dataInput.dadosSemana.map((item) => ({
    name: (dayMap as any)[item.nome] || item.nome,
    temperatura: Math.round(item.temperatura),
  }));

  // Determinando a última temperatura
  let lastTemperature = dataInput.ultimaTemperatura.toFixed(2) + " ºC";

  // Estrutura do objeto final
  let data = {
    color: cor,
    icon: "https://raw.githubusercontent.com/Felipeecp/climate-dashboard/582797617508f5a3f6a1d2bb9af6135cdfa35815/climate-change.svg",
    title: `Temperatura - ${codWmo}`,
    number: lastTemperature,
    dataKey: "temperatura",
    percentage: 45,
    chartData: chartData,
  };

  return data;
};

export const getChartData = (codWmo: string,cor:string) => {
  const responseChartData = useQuery({
    queryKey: [`ultimosDados${codWmo}`],
    queryFn: () =>
      fetch(
        `http://143.244.149.136:57655/client/sensorDetail/ultimosDados/${codWmo}`
      )
        .then((res) => res.json())
        .then(data => mapTochartBoxData(data, cor, codWmo)),
  });
  console.log(responseChartData);
  return responseChartData;
};
