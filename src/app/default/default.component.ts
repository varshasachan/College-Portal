import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../dashboard/service/school.service';
import { ClrDatagridSortOrder } from '@clr/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  schoolData: any = [];
  descSort: number = ClrDatagridSortOrder.DESC;
  openModal: boolean = false;
  addSchoolform: FormGroup;
  className: string = '';
  loading:boolean = false;
  isEdit: boolean = false;
  userObj = {
    school:'',
    board:'',
    medium:'',
    class:''
  };

  Schoolname = 'BNSD';
  constructor(private schoolService: SchoolService, private formBuilder: FormBuilder) {
    this.addSchoolform = this.formBuilder.group({
      school: [''],
      board: [''],
      medium: [''],
      class: ['']
    });
  }

  ngOnInit(): void {
    this.getSchoolDetails();
  }

  getSchoolDetails(): void {
    this.loading = true;
    this.schoolService.getSchoolDetails().subscribe(
      (data: any) => {
        this.schoolData = data;
        console.log(data);
        this.loading = false;
      }
    )
  }

  openSchool(){
    this.openModal = true;
    this.isEdit = false;
    this.addSchoolform = this.formBuilder.group({
      school: [''],
      board: [''],
      medium: [''],
      class: ['']
    });
  }

  deleteSchool(school: any) {
    this.schoolService.deleteSchoolDetails(school).subscribe(() => {
      this.getSchoolDetails();
    })
  }

  editSchool(school : any){
    this.openModal = true;
    this.isEdit = true;
    this.userObj = school;
  }

  editSchoolwithid(){
    console.log('Edit School with ID gets called');
    this.isEdit = false;
    this.openModal = false;
    this.schoolService.updateSchoolDetails(this.userObj).subscribe(()=>{
      this.getSchoolDetails();
    });
  }
  addSchool() {
    this.openModal = false;
    console.log(this.addSchoolform.value);
    this.schoolService.createSchoolDetails(this.addSchoolform.value).subscribe((res : any) => {
      console.log('school has been added', res);
      this.getSchoolDetails();
    });
  }

}
