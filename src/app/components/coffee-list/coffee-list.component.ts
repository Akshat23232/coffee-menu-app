import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent {
  coffees: any[] = [];
  loading = true;
  error = '';

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.coffeeService.getCoffees().subscribe({
      next: (data) => {
        this.coffees = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load coffees';
        this.loading = false;
      }
    });
  }
}
