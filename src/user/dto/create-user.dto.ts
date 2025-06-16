import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()   
    firstName: string;
    
    @IsString()
    LastName?: string;

    @IsString()
    avatar?: string;

    @IsNumber()
    telegramId: number;

    @IsNumber()
    balance: number;
}
