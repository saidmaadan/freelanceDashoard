import { ModuleWithProviders} from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'documents', component: DocumentsComponent },
  {path: 'proposals', component: ProposalListComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);