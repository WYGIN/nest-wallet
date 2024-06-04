import { IsDate, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
    @IsString({ message: 'invalid FirstName'})
    readonly firstName: string;

    @IsString({ message: 'invalid LastName'})
    readonly lastName: string;

    @IsEmail()
    readonly email: string;

    @IsStrongPassword({ minLength: 8 })
    readonly password: string
}
