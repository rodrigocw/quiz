import styles from './Questionario.module.css'
import QuestaoModel from "../model/questao"
import Questao from './Questao'
import Botao from './Botao'

interface QuestionarioParams {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irParaProximo: () => void
}

export default function Questionario(params: QuestionarioParams) {

    function respostaFornecida(indice: number) {
        if(!params.questao.respondida) {
            params.questaoRespondida(params.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {params.questao ?
                <Questao 
                    valor={params.questao}
                    tempoParaResposta={10}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={params.irParaProximo} />
                : false
            }

            <Botao
                texto={params.ultima ? 'Finalizar' : 'Próxima'}
                onClick={params.irParaProximo}/>
        </div>
    )
}