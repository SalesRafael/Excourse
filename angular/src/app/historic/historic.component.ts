import { Injectable,Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})

@Injectable()
export class HistoricComponent implements OnInit {

  enrollments: any = {};

  APIURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEnrollments();
  }

  getEnrollments() {
    this.http.get<any>(this.APIURL+'enrollments')
    .subscribe(data => {
      console.log(data);
      if(data){
        this.enrollments = data;
      }
    });
  }
  
}