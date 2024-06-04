import { IsCurrency } from 'class-validator';

export class UpdateWalletDto {
    @IsCurrency()
    money: number
}
