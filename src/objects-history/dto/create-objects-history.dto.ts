import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateObjectsHistoryDto {
    @IsString()
    @IsNotEmpty()
    image: string;
    
    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    skinName: string;

    @IsString()
    @IsNotEmpty()
    objectOption: string;

}
