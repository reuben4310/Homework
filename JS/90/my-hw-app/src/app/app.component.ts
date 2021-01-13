import { Component } from '@angular/core';
import { Order } from './shared/order';
import { Person } from './shared/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  person: Person = {
    firstName: 'Joe',
    lastName: 'Biden',

    address: {
      street: '123 Any Street',
      city: 'Somewhere',
      state: 'Delaware',
      zip: '12345'
    }
  };
  order: Order={
    item:{
      name:'"Pizza"'


    },
    person:this.person,
    date: new Date()
  };
}

