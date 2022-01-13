import { ApiProperty } from "@nestjs/swagger";

export class CreateRevenueSubStreamDto {
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    revenueStreamId: number;

    @ApiProperty()
    revenueRateType: string;

    @ApiProperty()
    amount: number;
}
