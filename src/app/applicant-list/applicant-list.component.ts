import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements OnInit {


applicants=[{"name":"Rosie Metts", "pos": "iOS Developer"},
            {"name":"James Scott", "pos": "Node.js Developer"},
            {"name":"Jamie Laurenson", "pos": "Marketing Manager"},
            {"name":"Elizabeth Hurton", "pos": "UI/UX Designer"},
            {"name":"Danny Watson", "pos": "iOS Developer"},
            {"name":"Reha Scarlett", "pos": "iOS Developer"}];


  constructor() { }

  ngOnInit(): void {
  }

}
