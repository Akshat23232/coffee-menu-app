import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeService, Coffee } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-list.component.html',
  // styleUrls: ['./coffee-list.component.css']  <-- optional
})
export class CoffeeListComponent implements OnInit {
  coffees: Coffee[] = [];
  loading = true;
  error = '';

  fallbackImage = 'assets/default-coffee.png'; // default image path

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getCoffees().subscribe({
      next: (data) => {
        // Ensure all fields have safe default values
        this.coffees = data.map(c => ({
          ...c,
          image: c.image || this.fallbackImage,
          ingredients: c.ingredients || []
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load coffee data. Showing fallback data.';
        this.coffees = [
          {
            id: 0,
            title: 'Test Coffee',
            description: 'Sample coffee data.',
            ingredients: ['Coffee'],
            image: this.fallbackImage
          }
        ];
        this.loading = false;
      }
    });
  }
}
