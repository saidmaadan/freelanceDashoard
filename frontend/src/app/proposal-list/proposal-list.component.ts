import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Proposal} from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  // proposalOne: Proposal = new Proposal(1, 'Inventive labs', 'http://inventivelabs.co', 'Web Development', 230, 500, 10, 'info@inventivelabs.co')
  // proposalTwo: Proposal = new Proposal(2, 'Naija property', 'http://naijaproperty.com', 'Real Estate', 120, 400, 10, 'info@naijaproperty.com')
  // proposalThree: Proposal = new Proposal(3, 'Job Inbox', 'http://job-inbox.com', 'Job Board', 230, 200, 10, 'info@job-inbox.com')
  // proposalFour: Proposal = new Proposal(4, 'Evennttive', 'http://eventtive.com', 'Event App', 200, 300, 10, 'info@eventtive.com')

  proposals: Proposal[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private proposalService: ProposalService, private router: Router ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals().subscribe(proposals => {
      this.proposals = proposals,
      error => this.errorMessage = <any>error
    });
  }

  goToShow(proposal:Proposal):void{
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }
}

// proposals: Proposal[] = [
//   this.proposalOne, 
//   this.proposalTwo, 
//   this.proposalThree,
//   this.proposalFour ]
