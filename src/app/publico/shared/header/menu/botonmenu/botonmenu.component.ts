import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages-header-menu-botonmenu',
  templateUrl: './botonmenu.component.html',
  styleUrls: ['./botonmenu.component.css']
})
export class BotonmenuComponent implements OnInit {

  @Input() textoMenu: String = 'Texto Menu';
  @Input() linkMenu: String = 'link';

  @Input() active: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
