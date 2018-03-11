import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botonmenu',
  templateUrl: './botonmenu.component.html',
  styleUrls: ['./botonmenu.component.css']
})
export class BotonmenuComponent implements OnInit {

  @Input() textoMenu: String = 'Texto Menu';
  @Input() linkMenu: String = 'link';
  constructor() { }

  ngOnInit() {
  }

}
