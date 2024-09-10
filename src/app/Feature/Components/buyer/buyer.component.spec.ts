import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUYERComponent } from './buyer.component';

describe('BUYERComponent', () => {
  let component: BUYERComponent;
  let fixture: ComponentFixture<BUYERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BUYERComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BUYERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
