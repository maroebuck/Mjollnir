import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'customers', pathMatch: 'full'
  },
  {
    path: 'app', component: AppComponent
  },
  {
    path: 'subscriptions', component: SubscriptionsComponent
  },
  {
    path: 'customers', component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
