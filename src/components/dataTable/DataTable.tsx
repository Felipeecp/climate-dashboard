import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./dataTable.scss";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return fetch(`http://ufmawmobr.online/client/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      console.log("deletado");
      queryClient.invalidateQueries(["allSensors"] as any);
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Ações",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="actions">
          <Link to={`/${props.slug}/${params.row.idDb}`}>
            <img
              src="https://raw.githubusercontent.com/Felipeecp/climate-dashboard/85611ebedf21271ee2ffc950b2a71267e563d824/view.svg"
              alt=""
            />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.idDb)}>
            <img
              src="https://raw.githubusercontent.com/Felipeecp/climate-dashboard/85611ebedf21271ee2ffc950b2a71267e563d824/delete.svg"
              alt=""
            />
          </div>
        </div>
      );
    },
  };

  let data = props.rows !== undefined ? props.rows : [];

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
