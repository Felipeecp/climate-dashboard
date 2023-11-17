import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "Codigo do Sensor", width: 150 },
  {
    field: "dataCriacao",
    headerName: "Data de Criação",
    width: 110,
    editable: true,
  },
  {
    field: "cidade",
    headerName: "Cidade",
    width: 150,
    editable: true,
  },
  {
    field: "uf",
    headerName: "UF",
    width: 110,
    editable: true,
  },
  {
    field: "regiao",
    headerName: "Região",
    width: 110,
    editable: true,
  },
  {
    field: "latitude",
    headerName: "Latitude",
    width: 110,
    editable: true,
  },
  {
    field: "longitude",
    headerName: "Longitude",
    width: 110,
    editable: true,
  },
  {
    field: "altitude",
    headerName: "Altitude",
    width: 110,
    editable: true,
  },
  {
    field: "cidadeUf",
    headerName: "Cidade - UF",
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.cidade || ""} - ${params.row.uf || ""}`,
  },
];
