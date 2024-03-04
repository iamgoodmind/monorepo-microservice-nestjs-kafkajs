import { CreateUserDto } from "@app/shared/lib/dto";
import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up")
  createUser(@Body(ValidationPipe) craeteUserDto: CreateUserDto) {
    return this.authService.createUser(craeteUserDto);
  }
}
