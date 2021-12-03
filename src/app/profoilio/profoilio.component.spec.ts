import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfoilioComponent } from './profoilio.component';

describe('ProfoilioComponent', () => {
  let component: ProfoilioComponent;
  let fixture: ComponentFixture<ProfoilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfoilioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfoilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
