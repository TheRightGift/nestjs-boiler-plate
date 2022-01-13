import { ApiProperty } from "@nestjs/swagger";

export class CreateRevenueTypeDto {
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    code: string;
}
