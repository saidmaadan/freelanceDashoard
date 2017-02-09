import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentsComponent,
    ProposalListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
