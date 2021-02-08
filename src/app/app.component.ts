import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'college-portal';
  showApp: boolean = true;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(comp: string): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate([`${comp}`],{ relativeTo: this.route ,state: { mail: 'Shubham'}});
    }
    this.showApp = false;
  }
}
