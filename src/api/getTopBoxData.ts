import { useQuery } from "@tanstack/react-query";
import { SensorEntity } from "../model/SensorModel";

const mapToObject = (apiResponse: SensorEntity[]) => {
  return apiResponse.map((sensor) => ({
    id: sensor.id,
    img: "sensor_o.svg",
    wmo: sensor.wmo,
    local: `${sensor.nameCity}, ${sensor.nameState} - ${sensor.uf}`,
    region: sensor.region,
  }));
};

export const getTopBoxData = () => {
  const responseChartData = useQuery({
    queryKey: ["topSensorData"],
    queryFn: () =>
      fetch("http://143.244.149.136:57655/client/topSensorByWmo")
        .then((res) => res.json())
        .then(mapToObject),
  });

  return responseChartData;
};
