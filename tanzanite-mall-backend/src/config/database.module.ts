import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Load .env from root directory
dotenv.config({ path: join(__dirname, '../../../.env') });

// Debug log to check environment variables
console.log('Database Configuration:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  // Don't log the password for security
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: String(process.env.DB_PASSWORD), // Ensure password is a string
      database: process.env.DB_DATABASE || 'tanzanite_mall',
      entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'development',
      logging: true, // Enable logging temporarily for debugging
      ssl: false,
      extra: {
        trustServerCertificate: true,
      },
    }),
  ],
})
export class DatabaseModule {} 