import { GridColDef } from "@mui/x-data-grid";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface formDataType {
  [key: string]: FormDataEntryValue;
}
const responseBody: formDataType = {};

const Add = (props: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: formDataType) => {
      return fetch(`http://143.244.149.136:57655/client`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["allSensors"]);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    formData.forEach(
      (value, property: string) => (responseBody[property] = value)
    );
    console.log(responseBody);

    mutation.mutate(responseBody);
    props.setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Adiciona novo {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "cidadeUf")
            .map((column) => (
              <div className="item" key={column.field}>
                <label htmlFor={column.field}>{column.headerName}</label>
                <input
                  id={column.field}
                  name={column.field}
                  type={column.type}
                  placeholder={column.field}
                />
              </div>
            ))}
          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
