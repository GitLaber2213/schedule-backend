import { IsString } from "class-validator";



export class CreateTeacherDto {
    @IsString()
    fullName: string;
};


export type UpdateTeacherDto = Partial<CreateTeacherDto>;