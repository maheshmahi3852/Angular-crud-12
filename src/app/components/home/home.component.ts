import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data1: any;
  search: any = { name: '' };
  p: number = 1;
  constructor(public service: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getAllDetails();

  }

  getAllDetails() {
    this.service.getAll().subscribe((res: any) => {
      this.data1 = res;
      console.log(res);
    });
  }

  delete(id) {
    this.service.delete(id).subscribe((res) => {
      this.getAllDetails();
      this.toastr.success('Hello User!', 'Data successfully Dleted!');
    });
  }
}
