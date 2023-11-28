export interface LastSensorData {
  codWmo: string;
  ultimaTemperatura: number;
  ultimaUmidade: number;
  dadosSemana: DadosSemana[];
}

export interface DadosSemana {
  nome: string;
  temperatura: number;
  umidade: number;
}