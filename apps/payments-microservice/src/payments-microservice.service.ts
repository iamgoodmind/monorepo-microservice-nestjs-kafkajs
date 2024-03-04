import { MakePaymentDto } from "@app/shared/lib/dto";
import { User } from "@app/shared/lib/entities";
import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";

@Injectable()
export class PaymentsMicroserviceService implements OnModuleInit {
  constructor(
    @Inject("AUTH_MICROSERVICE") private readonly authClient: ClientKafka,
  ) {}

  processPayment(makePaymentDto: MakePaymentDto) {
    const { userId, amount } = makePaymentDto;
    console.log("process payment");
    this.authClient.send("get_user", JSON.stringify({ userId })).subscribe(
      (user: User) => {
        console.log(
          `process payment for user ${user.name} - amount: ${amount}`,
        );
      },
      (error) => {
        console.error("Error occurred while processing payment:", error);
        // Handle the error accordingly, e.g., log it, throw an exception, etc.
      },
    );
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf("get_user");
  }
}
