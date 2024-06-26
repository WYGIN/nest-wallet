import { IsEmail, IsString, IsStrongPassword, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsString({ message: 'invalid FirstName'})
    readonly firstName: string;

    @IsString({ message: 'invalid LastName'})
    readonly lastName: string;

    @IsNotEmpty()
    readonly username: string;

    @IsEmail()
    readonly email: string;

    @IsStrongPassword({ minLength: 8 })
    readonly password: string;
}
