
import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-pages-header-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  ngOnInit() {
  }

  constructor( private router: Router) {
    this.router.events
      .filter(evento => evento instanceof ActivationEnd)
      .filter( (evento: ActivationEnd) => evento.snapshot.firstChild == null)
      .map( (evento: ActivationEnd) => evento.snapshot.data)
      .subscribe( event => {
        console.log(event);
      });

      }
}
