import Questao from "../components/Questao";
import QuestaoModel from "../model/Questao";
import RespostaModel from "../model/Resposta";

export default function Home() {

  const questao = new QuestaoModel(1, 'Melhor Cor?', [
    RespostaModel.errada('Verde'),
    RespostaModel.certa('Preto'),
    RespostaModel.errada('Vermelha'),
    RespostaModel.errada('Azul'),
  ])

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Questao valor={questao} />
    </div>
  )
}
