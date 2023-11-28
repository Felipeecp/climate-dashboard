export interface CharBoxData {
  color: string;
  icon: string;
  title: string;
  number: string;
  dataKey: string;
  percentage: number;
  chartData: ChartData[];
}

export interface ChartData {
  name: string;
  temperatura: number;
}