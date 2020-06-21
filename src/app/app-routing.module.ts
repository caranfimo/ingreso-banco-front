import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CreatePersonComponent} from './create-person/create-person.component';
import {ListPersonsComponent} from './list-persons/list-persons.component';
import {DetailPersonComponent} from './detail-person/detail-person.component';

const routes: Routes = [
  {path: '', component: CreatePersonComponent},
  {path: 'lista', component: ListPersonsComponent},
  {path: 'details/:id', component: DetailPersonComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
