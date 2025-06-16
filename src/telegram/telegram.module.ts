import { Module } from '@nestjs/common';
import { TelegramController } from './telegram.controller';
import { TelegrafModule } from 'nestjs-telegraf';


@Module({
  imports: [TelegrafModule.forRoot({
    token: process.env.BOT_TOKEN || '',
  }),

  ],
  providers: [TelegramController],
})
export class TelegramModule { }
