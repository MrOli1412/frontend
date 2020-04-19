import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressPanelComponent } from './dress-panel.component';

describe('DressPanelComponent', () => {
  let component: DressPanelComponent;
  let fixture: ComponentFixture<DressPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
