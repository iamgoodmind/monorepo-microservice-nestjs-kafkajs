import { Module } from "@nestjs/common";
import { PaymentController } from "./payment.controller";
import { PaymentService } from "./payment.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "PAYMENT_MICROSERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "payment",
            brokers: ["localhost: 9092"],
          },
          consumer: {
            groupId: "payment-consumer",
          },
        },
      },
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
