import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent {
  title = 'Upcoming Angular Events';
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2023',
    time: '10:00 am',
    price: 799.99,
    imageUrl: './assets/images/angularconnect-shield.png',
    location: {
      address: '316 Ave',
      city: 'Austin',
      country: 'USA',
    },
  };
}
