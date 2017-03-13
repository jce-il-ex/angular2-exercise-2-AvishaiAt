
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit 
{

  buttons = [
              { id: "att", txt: "Attia" }, 
              { id: "hod", txt: "Hodaya" },     
              { id: "avi", txt: "Avishai" },     
              { id: "roni", txt: "Roni" }
            ]

  constructor() { }

  ngOnInit() {
  }
}