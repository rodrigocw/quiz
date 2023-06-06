import styles from './Estatistica.module.css'

interface EstatisticaParams {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}

export default function Estatistica(params: EstatisticaParams) {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: params.corFundo ?? '#fdd60f',
                color: params.corFonte ?? '#333'
            }}>
                {params.valor}
            </div>
            <div className={styles.texto}>
                {params.texto}
            </div>
        </div>
    )
}