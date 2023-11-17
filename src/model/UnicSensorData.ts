interface DataChart {
  name: string;
  temp: string;
  humidity: string;
  rawDate: number;
}

export interface UnicSensorData {
  title: string;
  img: string;
  info: {
    codWMO: string;
    cidade: string;
    estado: string;
    longitude: string;
    latitude: string;
    altitude: string;
  };
  chart: {
    dataKey: { name: string; color: string }[];
    data: DataChart[];
  };
  activities: { time: string; text: string; rawDate: number }[];
}
