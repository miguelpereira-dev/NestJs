import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'livros' })
export class Livro {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 60 })
	code: string;

	@Column('varchar')
	name: string;

	@Column('decimal', { precision: 10, scale: 2 })
	price: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
