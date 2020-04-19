import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressListItemComponent } from './dress-list-item.component';

describe('DressListItemComponent', () => {
  let component: DressListItemComponent;
  let fixture: ComponentFixture<DressListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
