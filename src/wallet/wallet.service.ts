import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, type UpdateResult } from 'typeorm';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>,
  ) {}

  create(createWalletDto: CreateWalletDto): Wallet {
    return this.walletRepository.create(createWalletDto);
  }

  findAll(): Promise<Wallet[]> {
    return this.walletRepository.find();
  }

  findOne(id: number): Promise<Wallet | null> {
    return this.walletRepository.findOneBy({ id });
  }

  update(id: number, updateWalletDto: UpdateWalletDto): Promise<UpdateResult> {
    return this.walletRepository.update({ id }, updateWalletDto);
  }

  async remove(id: number): Promise<void> {
    await this.walletRepository.delete(id)
  }
}
