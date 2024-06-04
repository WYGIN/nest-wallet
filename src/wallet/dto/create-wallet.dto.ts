import { IsEnum, IsNotEmpty } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

enum UserRole {
    BITCOIN = "Bitcoin",
    ETHEREUM = "Ethereum"
}

export class CreateWalletDto {
    @IsNotEmpty()
    address: string;

    @IsEnum(UserRole)
    walletType: string;

    @IsNotEmpty()
    userID: number;
}
