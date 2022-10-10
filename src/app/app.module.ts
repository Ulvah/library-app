import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageComponent } from './language/language.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BooktypeComponent } from './booktype/booktype.component';
import { DialogComponent } from './dialog/dialog.component';
import { BooktypeEditComponent } from './booktype-edit/booktype-edit.component';
import { LanguageEditComponent } from './language-edit/language-edit.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { BooktypeFormComponent } from './booktype-form/booktype-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    BooklistComponent,
    BooktypeComponent,
    DialogComponent,
    BooktypeEditComponent,
    LanguageEditComponent,
    LanguageFormComponent,
    BooktypeFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
