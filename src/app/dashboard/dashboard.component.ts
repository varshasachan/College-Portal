import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Name:any;

  constructor(private router: Router) { 
    // if (this.router.getCurrentNavigation() != null) {
    //   this.Name = this.router.getCurrentNavigation().extras.state;
    //   console.log(this.Name);
    // }
  }

  ngOnInit(): void {
  }

}
