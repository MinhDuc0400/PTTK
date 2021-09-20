import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingCalanderComponent } from './working-calander.component';

describe('WorkingCalanderComponent', () => {
  let component: WorkingCalanderComponent;
  let fixture: ComponentFixture<WorkingCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingCalanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
