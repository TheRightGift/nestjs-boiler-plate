import { Agency } from "src/agencies/entities/agency.entity";
import { RevenueType } from "src/revenue-type/entities/revenue-type.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class RevenueStream {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 100})
    name: string;

    @Column({type: "varchar", length: 255})
    description: string;

    @Column({type: "char", length: 5})
    code: string;

    @ManyToOne(type => Agency, agency => agency.id)
    agency: Agency; //dont name this column agencyId. Nestjs auto generates the 'Id' suffix for it

    @ManyToOne(type => RevenueType, revenueType => revenueType.id)
    revenueType: RevenueType; //dont name this column revenueTypeId. Nestjs auto generates the 'Id' suffix for it

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
