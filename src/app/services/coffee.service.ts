import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Coffee {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private apiUrl = 'https://api.sampleapis.com/coffee/hot';

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }
}
