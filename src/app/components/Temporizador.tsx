import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './Temporizador.module.css'

interface TemporizadorParams {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(params: TemporizadorParams) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={params.duracao}
                size={120}
                isPlaying
                onComplete={params.tempoEsgotado}
                colors={['#BCE596', '#F7B801', '#ED827A', '#ED827A']}
                colorsTime={[6, 3, 0, 0]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}