import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BooktypeComponent } from './booktype/booktype.component';
import { LanguageComponent } from './language/language.component';

const routes: Routes = [
  {path: '', component :HomeComponent},
  {path: 'booktype', component :BooktypeComponent},
  {path: 'language', component :LanguageComponent},
  {path: 'booklist', component :BooklistComponent},
  {path: '**', component :PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




