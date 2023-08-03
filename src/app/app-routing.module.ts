import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpayComponent } from './webpay/webpay.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WebpayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
