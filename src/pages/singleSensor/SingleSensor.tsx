//tela que irá exibir as informações de cada sensor

//imports necessários
import './singlesensor.scss'
import Single from '../../components/single/Single';
import { singleSensor } from '../../data';

//tela renderizando componente criado
const SingleSensor = () => {
    return (
        <div>
            <Single {...singleSensor} />

        </div>
    )
}

export default SingleSensor
