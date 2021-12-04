import { useState } from "react";
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

  function respostaFornecida(indice: number){
    console.log(indice);
    setQuestao(questao.responderCom(indice))
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Questao valor={questao} respostaFornecida={respostaFornecida}/>
    </div>
  )
}
