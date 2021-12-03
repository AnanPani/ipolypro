import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermofusComponent } from './termofus.component';

describe('TermofusComponent', () => {
  let component: TermofusComponent;
  let fixture: ComponentFixture<TermofusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermofusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermofusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
