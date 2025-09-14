import { Component } from '@angular/core';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoffeeListComponent],
  template: `<app-coffee-list></app-coffee-list>`
})
export class AppComponent {}
