import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css'],
})
export class AdddataComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.email,
    ]),
    age: new FormControl('', [Validators.required]),

    qualification: new FormControl('', [Validators.required, Validators.minLength(4)]),
    number: new FormControl('+91', [Validators.required,Validators.minLength(10)]),
    location: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(public service: ApiService, public route: Router,private toastr: ToastrService) {}

  ngOnInit(): void {}
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {

    this.service.adddata(this.loginForm.value).subscribe((data) => {
      console.log(data);
      this.loginForm.reset();
      this.route.navigate(['/home']);
      this.toastr.success('Hello Dear!', 'Data add successfully!'
     );
    });
  }
}
