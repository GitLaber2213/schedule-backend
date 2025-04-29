import { IsString } from "class-validator";


export class CreateDisciplineDto {
    @IsString()
    disciplineName: string;
};

export type UpdateDisciplineDto = Partial<CreateDisciplineDto>;