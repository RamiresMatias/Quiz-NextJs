import { useEffect, useRef, useState } from "react";
import QuestaoModel from "../model/Questao";
import Questionario from "../components/Questionario";
import { useRouter } from "next/router";
import Inicio from "../components/Inicio";

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
  const [comecar, setComecar] = useState<boolean>(false)
  
  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(id: number) {
    try {
      const resp = await fetch(`${BASE_URL}/questoes/${id}`)
      const json = await resp.json()
      const novaQuestao = QuestaoModel.criaUsandoObjeto(json)
      setQuestao(novaQuestao)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    carregarIdsQuestoes() 
  }, [])

  useEffect(() => {
    !!idsDasQuestoes.length && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    isAcertou(questaoRespondida)
  }

  function isAcertou(questaoRespondida: QuestaoModel) {
    const acertou = questaoRespondida.acertou
    const result = acertou ? 1 : 0
    setRespostasCertas(respostasCertas + result)
  }

  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
    return idsDasQuestoes[proximoIndice]
  }

  function irParaProximaQuestao(proximoId: number){
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  function irParaProximoPasso (){
    const proximoId = idProximaPergunta()
    if(!!proximoId) irParaProximaQuestao(proximoId)
    else finalizar()
  }

  return comecar ? (
      <Questionario 
        questao={questao}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
      />
  ) : (
      <Inicio comecar={setComecar}/>
  )
}
