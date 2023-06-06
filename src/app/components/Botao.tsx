import Link from 'next/link'
import styles from './Botao.module.css'

interface BotaoParams {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

export default function Botao(params: BotaoParams) {

    function renderizarBotao() {
        return (
            <button className={styles.botao}
                onClick={params.onClick}>
                {params.texto}
            </button>
        )
    }

    return params.href ? (
        <Link href={params.href}>
            {renderizarBotao()}
        </Link>
    ) : renderizarBotao()
}