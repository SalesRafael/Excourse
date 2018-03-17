import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  APIURL = 'http://localhost:3000/';

  constructor(private http: HttpClient,        private router: Router  ) { }

  ngOnInit() {}

  sendMessage() {
    this.loading = true;
    this.http.post<any>(this.APIURL+'supports',{message: this.model.message})
    .subscribe(
      data => {
        this.loading = false;
        this.router.navigate(["/"]);
      },
      err => {
        this.loading = false;
        this.router.navigate(["/"]);
      });
  }
  
}