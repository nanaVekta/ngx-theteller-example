import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-theteller-example';

  apiKey = environment.THE_TELLER_API_KEY; // API key. You will get this in your theteller account
  transactionId = Math.floor(100000000000 + Math.random() * 900000000000).toString(); // A unique 12 digit transaction id
  amount = 1; // amount to charge
  currency = 'GHS'; // currency to charge in. If not defined, default is GHS
  customerEmail = 'test@email.com'; // customer's email
  returnUrl = 'https://juliusasante.com'; // A url to redirect to after a successful payment. It can be a page showing a successful transaction message to the user
  paymentMethod = 'both'; //Payment method, options include card, momo and both. If not specified, default is both
}
