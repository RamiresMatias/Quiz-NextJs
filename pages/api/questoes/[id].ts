import questoes from '../bancoDeQuestoes'

// eslint-disable-next-line import/no-anonymous-default-export
export default function questionario(req, res) {
    
    const idSelecionado = +req.query.id
    const questao = questoes.filter(questao => questao.id === idSelecionado)

    if(questao.length !== 1) res.status(204).send()

    const questaoSelecionada = questao[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.toObject())
} 