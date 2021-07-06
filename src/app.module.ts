import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros/livros.controller';
import { LivrosService } from './livros/livros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livro } from './livros/livro.model';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: 'nest_livraria',
			entities: [Livro],
			autoLoadEntities: true,
			synchronize: true,
		}),
		TypeOrmModule.forFeature([Livro])
	],
	controllers: [AppController, LivrosController],
	providers: [AppService, LivrosService],
})
export class AppModule {}
