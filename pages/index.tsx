import { useEffect, useRef, useState } from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import QuestaoModel from "../model/Questao";
import RespostaModel from "../model/Resposta";

const questaoMock = new QuestaoModel(1, 'Qual é a melhor Cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.certa('Preto'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
])


export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)
  const questaoRef = useRef<QuestaoModel>()

  // Referenciando o novo objeto a cada atualização de estado
  useEffect(() => {
    questaoRef.current = questao
  }, [questao])

  function respostaFornecida(indice: number){
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if(questaoRef.current.naoRespondida)
      setQuestao(questaoRef.current.responderCom(-1))
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '25px 0px'
    }}>
      <Questao 
        valor={questao} 
        tempoPraResposta={5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao texto="Próxima" href="/resultado"/>
    </div>
  )
}
