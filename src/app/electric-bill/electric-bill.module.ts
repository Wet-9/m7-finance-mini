import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricBillPageRoutingModule } from './electric-bill-routing.module';

import { ElectricBillPage } from './electric-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricBillPageRoutingModule
  ],
  declarations: [ElectricBillPage]
})
export class ElectricBillPageModule {}
