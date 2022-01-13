import { ApiProperty } from "@nestjs/swagger";

export class CreateAgencyDto {
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    mdaId: number;
}
