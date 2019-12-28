import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubListItemComponent } from './club-list-item.component';

describe('ClubListItemComponent', () => {
  let component: ClubListItemComponent;
  let fixture: ComponentFixture<ClubListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
