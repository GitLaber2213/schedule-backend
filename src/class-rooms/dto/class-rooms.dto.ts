import { IsString } from "class-validator";



export class CreateClassRoomDto {
    @IsString()
    classRoomName: string
}


export type UpdateClassRoomDto = Partial<CreateClassRoomDto>;