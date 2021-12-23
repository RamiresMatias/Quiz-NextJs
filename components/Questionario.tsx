import styles from "../styles/Questionario.module.css"
import Questao from "./Questao"
import QuestaoModel from "../model/Questao";
import Botao from "./Botao";

interface QuestionarioProps {
    questao: QuestaoModel,
    ultima: boolean,
    questaoRespondida: (questao: QuestaoModel) => void,
    irParaProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number){
        if(props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    const textoBotao = props.ultima ? 'Finalizar' : 'Próxima'

    return (
        <div className={styles.questionario}>
            {props.questao ? 
                <Questao
                    valor={props.questao}
                    tempoPraResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irParaProximoPasso} 
                />
                : false
            }

            <Botao 
                onClick={props.irParaProximoPasso}
                texto={textoBotao}
            />
        </div>
    )
}