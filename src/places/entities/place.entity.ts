import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/src/users/entities/user.entity';
import { Room } from '@/src/rooms/entities/room.entity';

@Entity('places')
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 5 })
  type: string;

  @Column({ length: 100, name: 'businessRegistrationNumber' })
  businessRegistrationNumber: string;

  @Column({ default: false })
  isRecommended: boolean;

  @Column('simple-json', { nullable: true })
  businessDays: string[];

  @ManyToOne(() => User, (user) => user.place)
  user: User;

  @OneToMany(() => Room, (room) => room.place)
  rooms: Room[];
}
