import { Injectable,Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  enrollment: any = {};

  APIURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDisciplines();
  }

  getDisciplines() {
    this.http.get<any>(this.APIURL+'enrollments/5aab19b07fd01f026d1fc638')
    .subscribe(data => {
      //console.log(data);
      if(data){
        this.enrollment = data;
      }
    });
  }

}
