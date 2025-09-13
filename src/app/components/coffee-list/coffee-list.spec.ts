import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeList } from './coffee-list';

describe('CoffeeList', () => {
  let component: CoffeeList;
  let fixture: ComponentFixture<CoffeeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
