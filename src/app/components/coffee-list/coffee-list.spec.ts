import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService, Coffee } from '../../services/coffee.service';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let coffeeServiceSpy: jasmine.SpyObj<CoffeeService>;

  const mockCoffees: Coffee[] = [
    {
      id: 1,
      title: 'Espresso',
      description: 'Strong coffee',
      ingredients: ['Coffee'],
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      title: 'Latte',
      description: 'Milk coffee',
      ingredients: ['Coffee', 'Milk'],
      image: 'https://via.placeholder.com/150'
    }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CoffeeService', ['getCoffees']);

    await TestBed.configureTestingModule({
      imports: [CoffeeListComponent],
      providers: [
        { provide: CoffeeService, useValue: spy }
      ]
    }).compileComponents();

    coffeeServiceSpy = TestBed.inject(CoffeeService) as jasmine.SpyObj<CoffeeService>;
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    coffeeServiceSpy.getCoffees.and.returnValue(of([]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show loading initially', () => {
    coffeeServiceSpy.getCoffees.and.returnValue(of([]));
    fixture.detectChanges();
    const loadingEl = fixture.nativeElement.querySelector('div');
    expect(loadingEl.textContent).toContain('Loading coffees...');
  });

  it('should display coffee list after fetch', () => {
    coffeeServiceSpy.getCoffees.and.returnValue(of(mockCoffees));
    fixture.detectChanges();
    
    const coffeeTitles = fixture.nativeElement.querySelectorAll('h3');
    expect(coffeeTitles.length).toBe(2);
    expect(coffeeTitles[0].textContent).toContain('Espresso');
    expect(coffeeTitles[1].textContent).toContain('Latte');
  });

  it('should display error message on service failure', () => {
    coffeeServiceSpy.getCoffees.and.returnValue(throwError(() => new Error('API error')));
    fixture.detectChanges();
    
    const errorEl = fixture.nativeElement.querySelector('.error');
    expect(errorEl.textContent).toContain('Failed to load coffee data.');
  });
});
