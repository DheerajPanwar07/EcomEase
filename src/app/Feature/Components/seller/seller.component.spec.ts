import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SELLERComponent } from './seller.component';

describe('SELLERComponent', () => {
  let component: SELLERComponent;
  let fixture: ComponentFixture<SELLERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SELLERComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SELLERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
