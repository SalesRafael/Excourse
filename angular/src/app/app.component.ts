import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app works!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  people: any[] = [];
  
  authentication: String  = 'Not authorized';

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllUsers();
  }

  // Add one person to the API
  addUser(name, email, password) {
    this.http.post(`${this.API}/users`, {name, email, password})
      .map(res => res.json())
      .subscribe(() => {
        this.getAllUsers();
      })
  }
  
  //Login
  login(email, password) {
    this.http.post(`${this.API}/users/login/`, {email,password})
        .map( res => {
        if (res) {
            if (res.status === 200) {
              this.authentication = 'Authorized';            
            }else{
              this.authentication = 'Not Authorized';      
            }
        }
      });
  }
  
  // Get all users from the API
  getAllUsers() {
    this.http.get(`${this.API}/users`)
      .map(res => res.json())
      .subscribe(people => {
        console.log(people)
        this.people = people
      })
  }
}