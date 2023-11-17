interface SensorDetail {
  id: string;
  codWMO: string;
  registrationDate: string;
  data: {
    temperatura: string;
    umidade: string;
  };
}
