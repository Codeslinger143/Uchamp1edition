import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacticondialogComponent } from './contacticondialog.component';

describe('ContacticondialogComponent', () => {
  let component: ContacticondialogComponent;
  let fixture: ComponentFixture<ContacticondialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacticondialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacticondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
