import { ApiProperty } from "@nestjs/swagger";

export class CreateRevenueRateTypeDto {
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    code: string;
}
