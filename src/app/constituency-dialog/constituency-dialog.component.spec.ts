import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituencyDialogComponent } from './constituency-dialog.component';

describe('ConstituencyDialogComponent', () => {
  let component: ConstituencyDialogComponent;
  let fixture: ComponentFixture<ConstituencyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstituencyDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstituencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
