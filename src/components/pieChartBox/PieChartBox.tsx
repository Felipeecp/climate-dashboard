import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import "./pieChartBox.scss"
import { pieChartData } from "../../data"

export const PieChartBox = () => {
  return (
    <div className="pieChartBox">
        <h1>Distribuição de Condições Climáticas</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
                <PieChart>
                    <Tooltip 
                        contentStyle={{background:"white",borderRadius:"5px"}}
                    />
                    <Pie
                    data={pieChartData}
                    innerRadius={"70%"}
                    outerRadius={"90%"}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {pieChartData.map((item) => (
                        <Cell key={item.name} fill={item.color} />
                    ))}
                    </Pie>
            </PieChart>
        </ResponsiveContainer>
        </div>
        <div className="options">
            {pieChartData.map((item)=>(
                <div className="option" key={item.name}>
                    <div className="title">
                        <div className="dot" style={{ backgroundColor:item.color}}/>
                        <span>{item.name}</span>
                    </div>
                    <span>{item.value} dias</span>
                </div>
            ))}
        </div>
    </div>
  )
}
