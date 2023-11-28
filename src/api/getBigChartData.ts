import { useQuery } from "@tanstack/react-query";

export const getBigChartData = (codWmoA: string, codWmoB: string) => {
  if(codWmoA === undefined || codWmoB === undefined) return null;
  const responseChartData = useQuery({
    queryKey: [`temperatures`],
    queryFn: () =>
      fetch(
        `http://143.244.149.136:57655/client/sensorDetail/temperatures?sensorACode=${codWmoA}&sensorBCode=${codWmoB}`
      ).then((res) => res.json()),
  });

  return responseChartData;
};
