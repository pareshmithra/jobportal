import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-applied-candidates',
  templateUrl: './applied-candidates.component.html',
  styleUrls: ['./applied-candidates.component.css']
})
export class AppliedCandidatesComponent implements OnInit {
  @Input() postedJobs: Array<any>;
  public appliedCandidates;
  constructor() {}

  ngOnInit() {
  }
}
