import { IsNumber, IsString } from "class-validator";

export class CreateTarifficationDto {
    @IsNumber()
    disciplineID: number;

    @IsNumber()
    groupID: number;

    @IsString()
    subGroup: string;

    @IsNumber()
    teacherID: number;

    @IsNumber()
    activityTypeID: number;

    @IsNumber()
    activityYearHours: number;
}

export type UpdateTarifficationDto = Partial<CreateTarifficationDto>;
