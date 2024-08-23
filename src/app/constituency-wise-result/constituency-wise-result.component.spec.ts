import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituencyWiseResultComponent } from './constituency-wise-result.component';

describe('ConstituencyWiseResultComponent', () => {
  let component: ConstituencyWiseResultComponent;
  let fixture: ComponentFixture<ConstituencyWiseResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstituencyWiseResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstituencyWiseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
