export class CreateTaskDto {
    id: number;
    icon: Uint8Array;
    description: string;
    reward: number;
    isCompleted: boolean;
}
