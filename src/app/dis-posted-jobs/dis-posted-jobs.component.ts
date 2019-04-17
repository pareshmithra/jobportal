import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dis-posted-jobs',
  templateUrl: './dis-posted-jobs.component.html',
  styleUrls: ['./dis-posted-jobs.component.css']
})
export class DisPostedJobsComponent implements OnInit {
  public AllPostedJobs;
  allApplicants;
  allApplicants_id;
  trigger = false;
  candidateArray = [];
  //@Output() public AllApplicants = new EventEmitter();
  constructor(private getPostedJobs: MyServiceService, private router: Router) {
    //console.log(localStorage.getItem("EmployerId"));

    this.getPostedJobs
      .getAllPostedJobs(localStorage.getItem('EmployerId'))
      .subscribe(res => {
        console.log('Am displaying Jobs');
        console.log(res);
        this.AllPostedJobs = res['result'];
        console.log(this.AllPostedJobs);
        console.log('Hello:', this.AllPostedJobs[0]['AppliedStudentDetails']);
        //console.log(this.AllPostedJobs[0].AppliedStudentDetails[0].empName);
        //for(let i = 0; i<this.AllPostedJobs[0].AppliedStudentDetails.length)

        // this.allApplicants = this.AllPostedJobs[0].AppliedStudentDetails[0];
        // console.log(this.AllPostedJobs.length); //2
        // console.log(this.AllPostedJobs[0].AppliedStudentDetails.length); //1
        // console.log(this.AllPostedJobs[1].AppliedStudentDetails.length); //2

        // for (let i = 0; i < this.AllPostedJobs.length; i++) {
        //   // if(this.AllPostedJobs[i].AppliedStudentDetails[i].length<1)
        //   //console.log(this.AllPostedJobs[i].AppliedStudentDetails[i].empName);

        //   for (
        //     let j = i;
        //     j < this.AllPostedJobs[i].AppliedStudentDetails.length;
        //     j++
        //   ) {
        //     //this.allApplicants.push(this.AllPostedJobs[j].AppliedStudentDetails[j].empName);
        //     this.allApplicants +=
        //       this.AllPostedJobs[j].AppliedStudentDetails[j].empName + ' , ';
        //     console.log(this.allApplicants);
        //   }
        //   //console.log(this.allApplicants);
        // }
      });
  }

  ngOnInit() {}
  viewApplicantDetails(studentDetails) {
    // console.log(studentDetails);
    this.trigger = true;
    for (var i = 0; i < studentDetails.length; i++) {
      this.candidateArray.push(studentDetails[i]);
      console.log(
        'candidate array : ' + JSON.parse(JSON.stringify(this.candidateArray))
      );

      console.log(studentDetails[i]);
      this.allApplicants = studentDetails[i];
      // this.allApplicants_id = studentDetails[i]._id;
    }
    //this.AllApplicants.emit(this.AllPostedJobs[0]['AppliedStudentDetails'])
  }
}
