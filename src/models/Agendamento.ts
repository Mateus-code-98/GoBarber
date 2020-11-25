import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('agendamentos')
class Agendamento{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('varchar')
    provider_id:string;
    @Column('timestamp with time zone')
    date:Date
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    updated_at:Date
}

export default Agendamento