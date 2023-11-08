//@ts-nocheck
import { Telegraf } from "telegraf";

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const bot = new Telegraf("6010983445:AAHu5iPqEMRx-7JAp7SvYMkd0bVNm_mpI5k");

    await bot.telegram.sendMessage(902995638, `Номер телефона - ${body?.phone}`);
  } catch (error) {
    console.log(error)
  }


  return Response.json({});
}
