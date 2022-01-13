import { RevenueStream } from "src/revenue-stream/entities/revenue-stream.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
export enum RevenueRateType {
    FIXED = "FIXED",
    VARIABLE = "VARIABLE",
    COMPUTE = "COMPUTE"
}

@Entity()
export class RevenueSubStream {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 100})
    name: string;

    @Column({type: "varchar", length: 255})
    description: string;

    @Column({type: "char", length: 5})
    code: string;

    @ManyToOne(type => RevenueStream, revenueStream => revenueStream.id)
    revenueStream: RevenueStream; //dont name this column revenueStreamId. Nestjs auto generates the 'Id' suffix for it

    @Column({
        type: "enum",
        enum: RevenueRateType,
    })
    revenueRateType: RevenueRateType

    @Column({type: "int"})
    amount: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
      })
      createdAt: Date;
    
    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date;
}
