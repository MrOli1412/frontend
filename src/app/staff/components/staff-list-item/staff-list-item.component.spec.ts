import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListItemComponent } from './staff-list-item.component';

describe('StaffListItemComponent', () => {
  let component: StaffListItemComponent;
  let fixture: ComponentFixture<StaffListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
