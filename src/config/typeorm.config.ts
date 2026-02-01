import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typeOrmConfig = (configService: ConfigService) :TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST') ?? 'localhost',
    port: parseInt(configService.get<string>('DATABASE_PORT') ?? '5432', 10),
    username: configService.get<string>('DATABASE_USER') ?? 'postgres',
    password: configService.get<string>('DATABASE_PASSWORD') ?? 'postgres',
    database: configService.get<string>('DATABASE_NAME') ?? 'postgres',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    ssl: true,
    logging: true
});