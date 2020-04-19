import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressPageComponent } from './dress-page.component';

describe('DressPageComponent', () => {
  let component: DressPageComponent;
  let fixture: ComponentFixture<DressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
