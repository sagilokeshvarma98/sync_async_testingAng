import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncTestingComponent } from './components/async-testing/async-testing.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
