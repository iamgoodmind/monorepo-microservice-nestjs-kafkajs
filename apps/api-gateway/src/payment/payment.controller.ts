import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from '@app/shared/lib/dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentservice: PaymentService) {}

  @Post('pay')
  makePayment(@Body(ValidationPipe) makePaymentDto: MakePaymentDto) {
    return this.paymentservice.makePayment(makePaymentDto);
  }
}
