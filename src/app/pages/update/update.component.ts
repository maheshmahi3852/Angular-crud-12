import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm = this.fb.group({
    'id': new FormControl(''),
    'name': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'email': new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.email,
    ]),
    'age': new FormControl('', [Validators.required]),
    'sex': new FormControl('', [Validators.required]),
    'qualification': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'number': new FormControl('', [Validators.required,Validators.minLength(10)]),
    'location': new FormControl('', [Validators.required, Validators.minLength(3)]),
  });


  userId: any;

  constructor(public act:ActivatedRoute,public router:Router, public api:ApiService,public fb:FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.act.params.subscribe(data => {
      this.userId = data.id;
    });
      this.api.viewData(this.userId).subscribe(formData => {
  this.updateForm = this.fb.group({
      'name': new FormControl(formData['name']),
      'email': new FormControl(formData['email']),
      'age': new FormControl(formData['age']),
      'qualification': new FormControl(formData['qualification']),
      'number': new FormControl(formData['number']),
      'location': new FormControl(formData['location']),
    });
    });

  }

  get f() {
    return this.updateForm.controls;
  }

  updateDataValue(){
   this.api.updateData(this.userId,this.updateForm.value).subscribe(data => {
     console.log(data)
    this.toastr.success('Hello Dear!', 'Data update successfully!'
    );
    this.router.navigate(['/'])
   });
  }



}
