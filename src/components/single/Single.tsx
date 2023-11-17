//componente que irá exibir as informações detalhadas de um sensor selecionado

//imports
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
import "./single.scss";
import { UnicSensorData } from "../../model/UnicSensorData";


//criação do componente - utilização de gráfico da biblioteca recharts
export default function Single(data: UnicSensorData) {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {data.img && <img src={data.img} />}
            <h1 key={data.title}>{data.title}</h1>
            <button>update</button>
          </div>
          <div className="details">
            {Object.entries(data.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {data.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {data.chart.dataKey.map((dataKey) => (
                  <Line
                    key={dataKey.name}
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Últimas Atividades</h2>

        {data.activities && (
          <ul>
            {data.activities.map((activities:any) => (
              <li key={activities.text}>
                <div>
                  <p>{activities.text}</p>
                  <time>{activities.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
