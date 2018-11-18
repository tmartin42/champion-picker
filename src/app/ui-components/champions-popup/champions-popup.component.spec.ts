import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsPopupComponent } from './champions-popup.component';

describe('ChampionsPopupComponent', () => {
  let component: ChampionsPopupComponent;
  let fixture: ComponentFixture<ChampionsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
