import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminateComponent } from './eliminate.component';

describe('EliminateComponent', () => {
  let component: EliminateComponent;
  let fixture: ComponentFixture<EliminateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
