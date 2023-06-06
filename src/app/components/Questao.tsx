

import styles from './Questao.module.css'
import QuestaoModel from "../model/questao"
import Enunciado from './Enuncioado'
import Resposta from './Resposta'
import Temporizador from './Temporizador'

interface QuestaoParams {
    valor: QuestaoModel
    tempoParaResposta: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const letras = [
    { valor: 'A', cor: '#f2c866'},
    { valor: 'B', cor: '#f266ba'},
    { valor: 'C', cor: '#85d4f2'},
    { valor: 'D', cor: '#bce596'},
]

export default function Questao(params: QuestaoParams) {
    const questao = params.valor

    function renderizarResposta() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                    key={`${questao}.id-${i}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={params.respostaFornecida}
                />
            )
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador
                key={questao.id}
                duracao={params.tempoParaResposta ?? 10}
                tempoEsgotado={params.tempoEsgotado}/>
            {renderizarResposta()}
        </div>
    )
}