import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContacticondialogComponent } from '../contacticondialog/contacticondialog.component';
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      // state(),
      transition('void => *', [style({ opacity: 0 }),
      animate(1000, style({ opacity: 1 }))])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  opencontactform() {
  this.dialog.open(ContacticondialogComponent, { width: '30%', height: '50%',})
  }
}
