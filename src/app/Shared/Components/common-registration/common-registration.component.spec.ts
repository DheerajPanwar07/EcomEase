import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonRegistrationComponent } from './common-registration.component';

describe('CommonRegistrationComponent', () => {
  let component: CommonRegistrationComponent;
  let fixture: ComponentFixture<CommonRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
