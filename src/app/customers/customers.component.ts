import { Component, OnInit } from '@angular/core';
declare var createCustomer: any;
declare var createSubscription: any;
declare var subscribe: any;
declare var getStatus: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  clientSecret: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  async create() {
    const { customer } = await createCustomer();
    var priceId = "price_1KYVoLH1kz1Xmm0RAC0T4mWZ";
    var customerId = customer.id;
    const { subscription } = await createSubscription(priceId, customerId);
    this.clientSecret = subscription.latestInvoice.paymentIntent.clientSecret;
    sessionStorage.setItem('clientSecret', this.clientSecret);
    await subscribe(this.clientSecret);
  }

  async status() {
    var secret = sessionStorage.getItem('clientSecret')?.toString();
    if (secret !== null && secret !== undefined) {
      this.clientSecret = secret.toString();
      await getStatus(this.clientSecret);
    }
  }
}
