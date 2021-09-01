import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/material-module';
import { OrderPageModule } from './order.page/order.page.module';
import {PaymentPageModule} from './payment.page/payment.page.module'
@NgModule({
  declarations: [

  ],
  imports: [
    MaterialModule,
    PaymentPageModule,
    OrderPageModule
  ],
  exports:[
    MaterialModule,
    PaymentPageModule,
    OrderPageModule],
  providers: [],
})
export class FeaturesModule { }
