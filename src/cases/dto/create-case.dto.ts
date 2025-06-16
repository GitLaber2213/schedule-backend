import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCaseDto {
//   { caseId: 1, image: 'ssss', skinName: 'Скин9', dropChance: 0.1, type: 'SOUVENIR' },
    // image: Buffer;
    
    // @IsString()
    // @IsNotEmpty()
    // name: string;
    
    // @IsNumber()
    // @IsNotEmpty()
    // price: number;


    @IsNumber()
    @IsNotEmpty()
    caseId: number;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    skinName: string;

    @IsNumber({ allowNaN: false, allowInfinity: false })
    @IsNotEmpty()
    dropChance: number;

    @IsString()
    @IsNotEmpty()
    type: string;
}
