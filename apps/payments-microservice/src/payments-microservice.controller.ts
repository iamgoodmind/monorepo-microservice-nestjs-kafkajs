import { Controller, ValidationPipe } from "@nestjs/common";
import { PaymentsMicroserviceService } from "./payments-microservice.service";
import { EventPattern, Payload } from "@nestjs/microservices";
import { MakePaymentDto } from "@app/shared/lib/dto";

@Controller()
export class PaymentsMicroserviceController {
  constructor(
    private readonly paymentsMicroserviceService: PaymentsMicroserviceService,
  ) {}

  @EventPattern("process_payment")
  handleProcessPayment(@Payload(ValidationPipe) data: MakePaymentDto) {
    this.paymentsMicroserviceService.processPayment(data);
  }
}
