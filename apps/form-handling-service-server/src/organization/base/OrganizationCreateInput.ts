/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { FormCreateNestedManyWithoutOrganizationsInput } from "./FormCreateNestedManyWithoutOrganizationsInput";
import { Type } from "class-transformer";
import { StateWhereUniqueInput } from "../../state/base/StateWhereUniqueInput";

@InputType()
class OrganizationCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => FormCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => FormCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => FormCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  forms?: FormCreateNestedManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => StateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StateWhereUniqueInput)
  @IsOptional()
  @Field(() => StateWhereUniqueInput, {
    nullable: true,
  })
  state?: StateWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  zipCode?: string | null;
}

export { OrganizationCreateInput as OrganizationCreateInput };
