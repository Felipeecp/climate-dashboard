//tela que irá exibir as informações de cada sensor

//imports necessários
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Single from "../../components/single/Single";
import "./singlesensor.scss";
import { mapToSingleSensor } from "../../util/mapToSingleSensor";

//tela renderizando componente criado
const SingleSensor = () => {
  let { id } = useParams<{ id: string }>();

  const { isPending, data, error } = useQuery({
    queryKey: ["singleSensor",id],
    queryFn: () =>
      fetch(`http://ufmawmobr.online/client/sensorData/${id}`)
        .then((res) => res.json())
        .then(mapToSingleSensor),
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  };
  
  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : data ? (
        console.log(data),
        <Single {...data} />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default SingleSensor;
