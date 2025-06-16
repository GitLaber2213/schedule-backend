import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CasesModule } from './cases/cases.module';
import { BalanceModule } from './balance/balance.module';
import { ObjectsHistoryModule } from './objects-history/objects-history.module';
import { UserModule } from './user/user.module';
import { DonatePriceModule } from './donate-price/donate-price.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [TasksModule, CasesModule, BalanceModule, ObjectsHistoryModule, UserModule, DonatePriceModule, TelegramModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
