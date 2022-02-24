import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UchampportfolioComponent } from './uchampportfolio.component';

describe('UchampportfolioComponent', () => {
  let component: UchampportfolioComponent;
  let fixture: ComponentFixture<UchampportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UchampportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UchampportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
