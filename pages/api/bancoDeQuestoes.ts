import QuestaoModel from "../../model/Questao";
import RespostaModel from "../../model/Resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', 
    [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', 
    [
        RespostaModel.errada('Cajú'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(203, 'Qual o coletivo de cães?', 
    [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', 
    [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(205, 'Quem reinou o Brasil primeiro?', 
    [
        RespostaModel.errada('Marechal Deodoro da Fonseca'),
        RespostaModel.errada('Presidente Vargas'),
        RespostaModel.errada('Pedro Álvares Cabral'),
        RespostaModel.certa('Dom Pedro I'),
    ]),
]

export default questoes