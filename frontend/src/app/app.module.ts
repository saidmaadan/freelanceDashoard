import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalNewComponent } from './proposal-new/proposal-new.component';
import { ProposalShowComponent } from './proposal-show/proposal-show.component';
import { ProposalService } from './proposal-list/proposal.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [DocumentService, ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
