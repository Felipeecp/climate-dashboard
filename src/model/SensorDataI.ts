interface SensorDataI {
  sensorInfo: {
    codWMO: string;
    cidade: string;
    estado: string;
    longitude: string;
    latitude: string;
    altitude: string;
  };
  sensorDetail: SensorDetail[];
}
