import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [{

    path: '**',
    component: PagenotfoundComponent

}];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
