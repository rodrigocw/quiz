import { embaralhar } from '@/app/functions/arrays';
import questoes from '@/app/questoes/api/bancoDeQuestoes';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const ids = questoes.map(questao => questao.id)
  return NextResponse.json({questionario: embaralhar(ids)})
}