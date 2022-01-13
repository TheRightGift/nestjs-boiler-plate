import { ApiProperty } from "@nestjs/swagger";

export class CreateSubSectorDto {
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
