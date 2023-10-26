import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./sensor.scss";

const columns: GridColDef[] = [
  { field: "id", headerName: "Codigo do Sensor", width: 90 },
  {
    field: "nomeSensor",
    headerName: "Sensor",
    width: 150,
    editable: true,
  },
  {
    field: "dataCriacao",
    headerName: "Data de Criação",
    width: 110,
    editable: true,
  },
  {
    field: "cidade",
    headerName: "Cidade",
    width: 110,
    editable: true,
  },
  {
    field: "uf",
    headerName: "UF",
    width: 110,
    editable: true,
  },
  {
    field: "cidadeUf",
    headerName: "Cidade - UF",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.cidade || ""} - ${params.row.uf || ""}`,
  },
];

const rows = [
  {
    id: "A001",
    nomeSensor: "Sensor A",
    dataCriacao: "25/10/2023",
    cidade: "São Luís",
    uf: "MA",
  },
  {
    id: "A002",
    nomeSensor: "Sensor B",
    dataCriacao: "25/10/2023",
    cidade: "São Luís",
    uf: "MA",
  },
  {
    id: "A003",
    nomeSensor: "Sensor C",
    dataCriacao: "25/10/2023",
    cidade: "Salvador",
    uf: "BA",
  },
  {
    id: "A004",
    nomeSensor: "Sensor D",
    dataCriacao: "25/10/2023",
    cidade: "Fortaleza",
    uf: "CE",
  },
  {
    id: "A005",
    nomeSensor: "Sensor E",
    dataCriacao: "25/10/2023",
    cidade: "Manaus",
    uf: "AM",
  },
  {
    id: "A006",
    nomeSensor: "Sensor F",
    dataCriacao: "25/10/2023",
    cidade: "Goiania",
    uf: "GO",
  },
  {
    id: "A007",
    nomeSensor: "Sensor G",
    dataCriacao: "25/10/2023",
    cidade: "Brasilia",
    uf: "DF",
  },
  {
    id: "A008",
    nomeSensor: "Sensor H",
    dataCriacao: "25/10/2023",
    cidade: "São Paulo",
    uf: "SP",
  },
];

const Sensor = () => {
  return (
    <div className="sensor">
      <div className="info">
        <h1>Sensores</h1>
        <button>Adicionar novo Sensor</button>
      </div>
      <DataTable slug="sensores" columns={columns} rows={rows} />
    </div>
  );
};

export default Sensor;
