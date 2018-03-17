import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})
export class DisciplineComponent implements OnInit {

  disciplines: any = {};

  APIURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDisciplines();
  }
    
  getDisciplines() {
    this.http.get<any>(this.APIURL+'disciplines')
    .subscribe(data => {
      //console.log(data);
      if(data){
        this.disciplines = data;
      }
    });
  }
}
