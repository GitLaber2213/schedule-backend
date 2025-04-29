import { IsString } from "class-validator";


export class CreateGroupDto {
    @IsString()
    groupName: string;
};

export type UpdateGroupDto = Partial<CreateGroupDto>;