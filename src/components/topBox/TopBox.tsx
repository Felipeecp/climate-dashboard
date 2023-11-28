import { TopSensorData } from "../../model/TopSensorData";
import "./TopBox.scss";

export const TopBox = (sensorData: TopSensorData[]) => {
  const sensorArray = Object.values(sensorData);
  console.log(sensorArray);
  return (
    <div className="topBox">
      <h1>Sensores</h1>
      <div className="list">
        {sensorArray.map((sensor) => (
          <div className="listItem" key={sensor.id}>
            <div className="user">
              <img src={sensor.img} alt="" />
              <div className="userTexts">
                <span className="userName">{sensor.wmo}</span>
                <span className="email">{sensor.local}</span>
              </div>
            </div>
            <span className="amount" key={sensor.id}>
              {sensor.region}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
