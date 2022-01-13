import { ApiProperty } from "@nestjs/swagger";

export class CreateMdaDto {
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    sectorId: number;
}
