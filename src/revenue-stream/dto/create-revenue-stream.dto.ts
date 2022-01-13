import { ApiProperty } from "@nestjs/swagger";

export class CreateRevenueStreamDto {
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    agencyId: number;

    @ApiProperty()
    revenueTypeId: number;
}
