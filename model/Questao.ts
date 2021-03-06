import { embaralhar } from "../functions/arrays"
import RespostaModel from "./Resposta"

export default class QuestaoModel{
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id(){
        return this.#id
    }

    get enunciado(){
        return this.#enunciado
    }

    get respostas(){
        return this.#respostas
    }

    get acertou(){
        return this.#acertou
    }

    get respondida(){
        return this.#respostas.some(resposta => resposta.revelada)
    }

    get naoRespondida() {
        return !this.respondida
    }

    static criaUsandoObjeto(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.criaUsandoObjeto(resp))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }

    toObject(){
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resp => resp.toObject()),
            acertou: this.#acertou,
        }
    }

    embaralharRespostas(): QuestaoModel{
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resp, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resp.certa
            return deveRevelar ? resp.revelar() : resp
        })

        return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
    }

}