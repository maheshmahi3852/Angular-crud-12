import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  userId: any;
  data: any;
   viewForm : FormGroup;
  constructor(public act:ActivatedRoute, public api:ApiService,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.act.params.subscribe(data => {
      this.userId = data.id;
    });
    this.api.viewData(this.userId).subscribe(formData => {
      this.viewForm = this.fb.group({
        'name': new FormControl(formData['name']),
        'email': new FormControl(formData['email']),
        'age': new FormControl(formData['age']),
        'qualification': new FormControl(formData['qualification']),
        'number': new FormControl(formData['number']),
        'location': new FormControl(formData['location']),
      });
    })
  }

}
