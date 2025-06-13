import { IsString, IsNumber, IsUrl, IsBoolean, Min, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsUrl()
  image: string;

  @IsString()
  category: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  rating?: number;

  @IsBoolean()
  @IsOptional()
  inStock?: boolean;
} 