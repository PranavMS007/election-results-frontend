import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalElectionResultComponent } from './total-election-result.component';

describe('TotalElectionResultComponent', () => {
  let component: TotalElectionResultComponent;
  let fixture: ComponentFixture<TotalElectionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalElectionResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalElectionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
