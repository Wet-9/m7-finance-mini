import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricBillPage } from './electric-bill.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricBillPageRoutingModule {}
