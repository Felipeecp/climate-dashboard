import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.scss";
import { CharBoxData } from "../../model/CharBoxData";

export const ChartBox = (props: CharBoxData) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to={""} style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="99%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                }}
                labelStyle={{
                  display: "none",
                }}
                position={{ x: 5, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* <div className="texts">
                <div className="percentage"
                    style={{color: props.percentage<0 ? "tomato" : "limegreen"}}
                >{props.percentage} %</div>
                <div className="duration">this month</div>
            </div> */}
      </div>
    </div>
  );
};
