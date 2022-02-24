import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UchampknowledgebitesComponent } from './uchampknowledgebites.component';

describe('UchampknowledgebitesComponent', () => {
  let component: UchampknowledgebitesComponent;
  let fixture: ComponentFixture<UchampknowledgebitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UchampknowledgebitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UchampknowledgebitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
