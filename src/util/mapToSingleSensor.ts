import { differenceInDays, format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { UnicSensorData } from "../model/UnicSensorData";

export const mapToSingleSensor = (apiResponse: SensorDataI) => {
  const singleSensor: UnicSensorData = {
    title: "Sensor",
    img: "https://www.saravati.com.br/media/catalog/product/cache/ff61517d26ace703648229d56c081b52/1/5/156519c3ae.jpg",
    info: {
      codWMO: apiResponse["sensorInfo"].codWMO,
      cidade: apiResponse["sensorInfo"].cidade,
      estado: apiResponse["sensorInfo"].estado,
      longitude: apiResponse["sensorInfo"].longitude,
      latitude: apiResponse["sensorInfo"].latitude,
      altitude: apiResponse["sensorInfo"].altitude,
    },
    chart: {
      dataKey: [
        { name: "temp", color: "#82ca9d" },
        { name: "humidity", color: "#8884d8" },
      ],
      data: [{name: "",temp: "",humidity: "",rawDate: 0}],
    },
    activities: [],
  };

  singleSensor.chart.data = apiResponse["sensorDetail"].map((detail) => {
    const registrationDate = parseISO(detail.registrationDate);
    const dayOfWeek = format(registrationDate, "EEE", { locale: ptBR }); // Ex: 'Mon', 'Tue', etc.

    return {
      name: dayOfWeek,
      temp: detail.data.temperatura,
      humidity: detail.data.umidade,
      rawDate: registrationDate.getTime(),
    };
  });

  singleSensor.activities = apiResponse["sensorDetail"].map((detail) => {
    const registrationDate = parseISO(detail.registrationDate);
    const today = new Date();
    const daysAgo = differenceInDays(today, registrationDate);

    let timeText = `${daysAgo} dias atrás`;
    if (daysAgo === 0) {
      timeText = "hoje";
    } else if (daysAgo === 1) {
      timeText = "ontem";
    }

    return {
      text: `${Number(detail.data.temperatura).toFixed(1)} °C - ${Number(
        detail.data.umidade
      ).toFixed(0)}%`,
      time: timeText,
      rawDate: registrationDate.getTime(), // Salvar a data bruta para ordenação
    };
  });

  // Ordenar as atividades por data

  singleSensor.chart.data.sort((a, b) => b.rawDate - a.rawDate);
  singleSensor.activities.sort((a, b) => b.rawDate - a.rawDate);

  return singleSensor;
};
