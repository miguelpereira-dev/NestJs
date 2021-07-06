import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
	constructor(
		@InjectRepository(Livro)
		private livroModel: Repository<Livro>
	) {}

	async findAll(): Promise<Livro[]> {
		return this.livroModel.find();
	}

	async findOne(id: number): Promise<Livro> {
		return this.livroModel.findOne(id);
	}

	create(livro: Livro): Promise<Livro> {
		return this.livroModel.save(livro);
	}

	async change(livro: Livro, id: number) {
		return this.livroModel.update(id, livro);
	}

	async remove(id: number): Promise<void> {
		await this.livroModel.delete(id);
	}
}
