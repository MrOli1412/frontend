import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPanelComponent } from './match-panel.component';

describe('MatchPanelComponent', () => {
  let component: MatchPanelComponent;
  let fixture: ComponentFixture<MatchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
