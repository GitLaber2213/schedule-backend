import { IsString, IsNumber, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ActivityDto {
    @IsString()
    time: string;

    @IsNumber()
    classRoomID: number;

    @IsNumber()
    activityHours: number;

    @IsNumber()
    tarifficationID: number;

    @IsNumber()
    scheduleId: number;
};

export class CreateScheduleDto {
    @IsDateString()
    date: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ActivityDto)
    activitiesList: {
        create: ActivityDto[];
    };
};


export type UpdateScheduleDto = Partial<CreateScheduleDto>;