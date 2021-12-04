import QuestaoModel from "../model/Questao";
import styles from "../styles/Questao.module.css" 
import Enunciado from "../components/Enunciado"
import Resposta from "./Resposta";

interface QuestaoProps {
    valor: QuestaoModel,
    respostaFornecida: (indice: number) => void
}

const letras = [
    {valor: 'A', cor: '#f2c866'},
    {valor: 'B', cor: '#F266BA'},
    {valor: 'C', cor: '#85D4F2'},
    {valor: 'D', cor: '#BCE596'},
]

export default function Questao(props: QuestaoProps){
    const questao = props.valor

    function renderizarRespostas(){
        return questao.respostas.map((resposta, i) => {
            return <Resposta 
                key={i}
                valor={resposta} 
                indice={i} 
                letra={letras[i].valor} 
                corFundoLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
            />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
            {renderizarRespostas()}
        </div>
    )
}