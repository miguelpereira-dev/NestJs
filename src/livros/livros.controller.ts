import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
	constructor(private livrosService: LivrosService) {}

	@Get()
	async findAll(): Promise<Livro[]> {
		return this.livrosService.findAll();
	}

	@Get(':id')
	async findOne(@Param() params): Promise<Livro> {
		return this.livrosService.findOne(params.id);
	}

	@Post()
	async create(@Body() body: Livro) {
		
		this.livrosService.create(body);
	}

	@Put(':id')
	change(@Body() body: Livro, @Param() params): void {
		this.livrosService.change(body, params.id);
	}

	@Delete(':id')
	delete(@Param() params) {
		this.livrosService.remove(params.id);
	}
}
