'use client'

import { useEffect, useState } from "react";
import QuestaoModel from "./model/questao";
import Questionario from "./components/Questionario";
import { useRouter } from "next/navigation";

const BASE_URL = 'http://localhost:3000'

// Criado no inicio como nulo pois sem da erro de compilação
const questaoJesus = new QuestaoModel(1,'', [])

export default function Home() {
  const router = useRouter()
  const [idsDasQuestoes, setIdsDasQuestoes] = useState([])
  const [questao, setQuestao] = useState(questaoJesus)
  const [respostasCertas, setRespostasCertas] = useState(0)
  //const questaoRef = useRef<QuestaoModel>()

  /*useEffect(() => {
    questaoRef.current = questao
  },[questao])*/

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario/api`)
    const objQuestoes = await resp.json()
    const idsDasQuestoes = objQuestoes.questionario
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/api?id=${idQuestao}`)
    const questaoObj = await resp.json()
    const novaQuestao = QuestaoModel.deObjeto(questaoObj.questao)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaQuestao() {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]
  }

  function irParaProximo() {
    const proximoId = idProximaQuestao()
    proximoId ? irParaProximaQuestao(proximoId) : finalizar()
  }

  function irParaProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push(`/resultado?total=${idsDasQuestoes.length}&certas=${respostasCertas}`)
  }

  return questao ? (
    <Questionario
        questao={questao}
        ultima={idProximaQuestao() === undefined}
        questaoRespondida={questaoRespondida}
        irParaProximo={irParaProximo} />
  ) : false
}
