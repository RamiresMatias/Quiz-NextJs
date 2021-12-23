import { useEffect, useRef, useState } from "react";
import QuestaoModel from "../model/Questao";
import RespostaModel from "../model/Resposta";
import Questionario from "../components/Questionario";

const questaoMock = new QuestaoModel(1, 'Qual é a melhor Cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.certa('Preto'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState(questaoMock)
  
  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(id: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${id}`)
    const questao = await resp.json()
  }

  useEffect(() => {
    carregarIdsQuestoes() 
  }, [])

  useEffect(() => {
    !!idsDasQuestoes.length && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questao: QuestaoModel) {

  }

  function irParaProximoPasso (){

  }

  return (
    <Questionario 
        questao={questao}
        ultima
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
    />
  )
}
