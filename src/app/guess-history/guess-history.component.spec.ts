import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessHistoryComponent } from './guess-history.component';

describe('GuessHistoryComponent', () => {
  let component: GuessHistoryComponent;
  let fixture: ComponentFixture<GuessHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
