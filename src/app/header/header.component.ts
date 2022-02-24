import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

 openloginform(){
   this.dialog.open(LoginComponent,{width:'30%',height:'50%'})
 }

}


