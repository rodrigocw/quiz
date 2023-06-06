import QuestaoModel from "@/app/model/questao";
import questoes from "./bancoDeQuestoes";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = Number(searchParams.get('id'))
  const questoesFiltradas = questoes.filter(questao => questao.id === id)
  if (questoesFiltradas.length === 1) {
    const questao = questoesFiltradas[0].embaralharRespostas().paraObjeto()
    return NextResponse.json({questao: questao})
  } else {
    return NextResponse.json({ error: 'No Content' }, { status: 204 })
  }
}