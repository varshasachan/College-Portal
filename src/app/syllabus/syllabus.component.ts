import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../dashboard/service/school.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {

  syllabusObj = {
    subject: "",
    board: "",
    year: "",
    class: ""
  };

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
  }

  submitSyllabus(){
    this.schoolService.createSyllabus(this.syllabusObj).subscribe((res : any) => {
      console.log('Syllabus has been added to portal', res);
    });
  }

}
