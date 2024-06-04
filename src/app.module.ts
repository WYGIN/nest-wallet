import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, WalletModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
