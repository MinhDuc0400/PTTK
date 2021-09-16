import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRightBarComponent } from './side-right-bar.component';

describe('SideRightBarComponent', () => {
  let component: SideRightBarComponent;
  let fixture: ComponentFixture<SideRightBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideRightBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideRightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
