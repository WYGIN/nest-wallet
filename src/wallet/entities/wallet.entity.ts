import { User } from 'src/user/entities/user.entity';
import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: true })
    isActive: boolean;

    @Column({ unique: true })
    address: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ enum: ['Bitcoin', 'Ethereum'] })
    walletType: string;

    @Column({ type: 'money' })
    money: number;

    @ManyToOne(() => User, (user) => user.wallet)
    user: User;
}
