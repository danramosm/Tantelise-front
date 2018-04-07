import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  tituloString: string = 'Página sin título';
  descripcionString: string = 'Sin descripción';
  keywordString: string = 'Sin descripción';

  constructor( private router: Router, public titulo: Title, public meta: Meta) {
      this.getDataRoute()
        .subscribe( data => {
          this.tituloString = data.titulo;
          this.descripcionString = data.descripcion;
          this.keywordString = data.keywords;
          this.titulo.setTitle(this.tituloString);

          // tslint:disable-next-line:prefer-const
          let metaTagDesc: MetaDefinition = {
            name: 'description',
            content: this.descripcionString,
          };

          let metaTagKey: MetaDefinition = {
            name: 'Keywords',
            content: this.keywordString,
          };
          

          this.meta.updateTag(metaTagDesc);
          this.meta.updateTag(metaTagKey);
      });
   }

  getDataRoute() {
        return this.router.events
        .filter(evento => evento instanceof ActivationEnd)
        .filter( (evento: ActivationEnd) => evento.snapshot.firstChild == null)
        .map( (evento: ActivationEnd) => evento.snapshot.data);
  }

  ngOnInit() {
  }

}
