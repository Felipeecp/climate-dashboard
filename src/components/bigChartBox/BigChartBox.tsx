import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LastSensorData } from "../../model/LastSensorData";
import "./bigChartBox.scss";

export const BigChartBox = (props: LastSensorData[]) => {
  // Supondo que props[0] é o primeiro sensor e props[1] é o segundo sensor
  const dadosSensor1 = props[0]?.dadosSemana || [];
  const dadosSensor2 = props[1]?.dadosSemana || [];

  const dadosCombinados = dadosSensor1.map((dado, index) => {
    const dadoSensor2 = dadosSensor2;
    return {
      temperaturaSensor1: dado.temperatura,
      temperaturaSensor2: dadoSensor2[index].temperatura || null, // Usar null ou um valor padrão se não encontrar correspondência
    };
  });

  return (
    <div className="bigChartBox">
      <h1>Comparação entre Locais</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={dadosCombinados}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={false} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              name="Temperatura Sensor 1"
              type="monotone"
              dataKey="temperaturaSensor1"
              stroke="#8884d8"
            />
            <Line
              name="Temperatura Sensor 2"
              type="monotone"
              dataKey="temperaturaSensor2"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
