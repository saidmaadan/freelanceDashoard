import { ModuleWithProviders} from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalNewComponent } from './proposal-new/proposal-new.component';
import { ProposalShowComponent } from './proposal-show/proposal-show.component';




const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'documents', component: DocumentsComponent },
  {path: 'proposals', component: ProposalListComponent },
  {path: 'proposals/add', component: ProposalNewComponent },
  {path: 'proposal/:id', component: ProposalShowComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);