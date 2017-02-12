import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './../proposal-list/proposal';
import { ProposalService } from './../proposal-list/proposal.service';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css']
})
export class ProposalNewComponent implements OnInit {
  proposal = new Proposal;
  submitted: boolean = false;
  
  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
  }

  createProposal(proposal){
    this.submitted = true;
    this.proposalService.createProposal(proposal)
      .subscribe(
        data => { return true },
        error => { console.log("Error saving proposal");
        return Observable.throw(error);
      })
  }

}