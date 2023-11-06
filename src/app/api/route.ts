//@ts-nocheck
import { Telegraf } from "telegraf";

export async function POST(request: Request) {
    const body = await request.json()
  const bot = new Telegraf("6010983445:AAHu5iPqEMRx-7JAp7SvYMkd0bVNm_mpI5k");

  bot.telegram.sendMessage(977981822, body?.phone);

  return Response.json({});
}
