import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-uchamphomeone',
  templateUrl: './uchamphomeone.component.html',
  styleUrls: ['./uchamphomeone.component.scss'],
  animations:[
    trigger('fade',[
      // state(),
      transition('void => *',[style({opacity:0}),
      animate(3000,style({opacity:1}))])
    ])
  ]
})
export class UchamphomeoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
