import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../services/coffee.service';


@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffees: any[] = [];
  loading = true;
  error = '';

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getCoffees().subscribe({
      next: (data: any[]) => {   
        this.coffees = data;
        this.loading = false;
      },
      error: (err: any) => {     
        this.error = 'Failed to load coffees';
        this.loading = false;
      }
    });
  }
}

