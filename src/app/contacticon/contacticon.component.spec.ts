import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacticonComponent } from './contacticon.component';

describe('ContacticonComponent', () => {
  let component: ContacticonComponent;
  let fixture: ComponentFixture<ContacticonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacticonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
