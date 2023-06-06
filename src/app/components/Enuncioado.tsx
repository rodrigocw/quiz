import styles from './Enunciado.module.css'

interface EnunciadoParams {
    texto: string
}

export default function Enunciado(params: EnunciadoParams){
    return (
        <div className={styles.enunciado}>
            <div className={styles.texto}>
                {params.texto}
            </div>

        </div>
    )
}