

import RespostaModel from "../model/resposta";
import styles from './Resposta.module.css'

interface RespostaParams {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(params: RespostaParams) {
    const resposta = params.valor
    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''
    return (
        <div className={styles.resposta}
            onClick={() => params.respostaFornecida(params.indice)}>
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>
                <div className={styles.frente}>
                    <div className={styles.letra}
                        style={{ backgroundColor: params.corFundoLetra}}>
                        {params.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>
                    {resposta.certa ? (
                        <div className={styles.certa}>
                            <div>A resposta certa é...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <div>A resposta informada está errada...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}