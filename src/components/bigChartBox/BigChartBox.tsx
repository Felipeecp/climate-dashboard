import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./bigChartBox.scss"

const data = [
    {
      name: "Sun",
      "Sensor A": 27,
      "Sensor B": 21,
      "Sensor C": 33,
    },
    {
      name: "Mon",
      "Sensor A": 22,
      "Sensor B": 25,
      "Sensor C": 28,
    },
    {
      name: "Tue",
      "Sensor A": 25,
      "Sensor B": 23,
      "Sensor C": 30,
    },
    {
      name: "Wed",
      "Sensor A": 26,
      "Sensor B": 24,
      "Sensor C": 30,
    },
    {
      name: "Thu",
      "Sensor A": 24,
      "Sensor B": 26,
      "Sensor C": 29,
    },
    {
      name: "Fri",
      "Sensor A": 27,
      "Sensor B": 23,
      "Sensor C": 31,
    },
    {
      name: "Sat",
      "Sensor A": 25,
      "Sensor B": 21,
      "Sensor C": 27,
    },
  ];
  
export const BigChartBox = () => {
  return (
    <div className="bigChartBox">
        <h1>Comparação entre Locais</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <AreaChart
                data={data}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                        type="monotone" 
                        dataKey="Sensor A" 
                        stackId="1" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                    />
                    <Area 
                        type="monotone" 
                        dataKey="Sensor B" 
                        stackId="1" 
                        stroke="#82ca9d" 
                        fill="#82ca9d" 
                    />
                    <Area 
                        type="monotone" 
                        dataKey="Sensor C" 
                        stackId="1" 
                        stroke="#ffc658" 
                        fill="#ffc658" 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
