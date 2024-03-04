import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "@app/shared/lib/dto";
import { User } from "@app/shared/lib/entities";
import { EventPattern } from "@nestjs/microservices";

@Injectable()
export class AuthMicroserviceService {
  constructor(private readonly usersRepository: UsersRepository) {}

  @EventPattern()
  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }

  getUser(id: number): User {
    return this.usersRepository.findOne(id);
  }
}
