import { IsString } from "class-validator";


export class CreateActivityTypeDto {
    @IsString()
    activityType: string
}


export type UpdateActivityTypeDto = Partial<CreateActivityTypeDto>;