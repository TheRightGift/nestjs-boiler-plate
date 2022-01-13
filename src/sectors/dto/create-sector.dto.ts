import { ApiProperty } from "@nestjs/swagger";

export class CreateSectorDto {
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    code: string;
}
