import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    user :any = {};

    onInit(){
        this.user = localStorage.getItem('currentUser');
    }
}