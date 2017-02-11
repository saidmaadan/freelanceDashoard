import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './../proposal-list/proposal';
import { ProposalService } from './../proposal-list/proposal.service';


@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
  // id: number;
  // routeId: any;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private proposalService: ProposalService) { }

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) => this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(res => {
      this.proposal = res.json()
    });
    // this.routeId = this.route.params.subscribe(params => {
    //   this.id = +params['id'];
    // })
  }

}
