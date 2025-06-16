import { Context, Telegraf } from 'telegraf';
import { Ctx, InjectBot, Start, Update } from 'nestjs-telegraf';
import { actionButton } from './telegram.buttons';

@Update()
export class TelegramController {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}
  @Start()
  async startCommand(@Ctx() ctx: Context) {
    await ctx.reply(`Hello! ${ctx.from?.id}`, actionButton());
  }
}
