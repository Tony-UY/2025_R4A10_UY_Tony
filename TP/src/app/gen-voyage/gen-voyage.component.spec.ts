import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenVoyageComponent } from './gen-voyage.component';

describe('GenVoyageComponent', () => {
  let component: GenVoyageComponent;
  let fixture: ComponentFixture<GenVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
