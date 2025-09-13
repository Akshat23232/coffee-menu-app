import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDetail } from './coffee-detail';

describe('CoffeeDetail', () => {
  let component: CoffeeDetail;
  let fixture: ComponentFixture<CoffeeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
