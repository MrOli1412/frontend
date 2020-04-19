import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerUploadComponent } from './player-upload.component';

describe('PlayerUploadComponent', () => {
  let component: PlayerUploadComponent;
  let fixture: ComponentFixture<PlayerUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
