import { IsString, IsStrongPassword } from 'class-validator';

export class UpdateUserDto {
    @IsString({ message: 'invalid FirstName'})
    readonly firstName: string;

    @IsString({ message: 'invalid LastName'})
    readonly lastName: string;

    @IsStrongPassword({ minLength: 8 })
    readonly password: string;
}
