import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoffeeService {
  private apiUrl = 'https://api.sampleapis.com/coffee/hot';

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
