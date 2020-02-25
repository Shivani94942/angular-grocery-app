import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dir';
  hasError= false;
  isLoggedIn=true;
  number= "one";
  number1=1;
  names=["mary","mattew","andrew"];

  employees=[];

  constructor(){
    this.employees=[
      {"id":"000","name":"mary","age":"25"},
    {"id":"111","name":"andrew","age":"19"},
    {"id":"222","name":"kriston","age":"28"},
    {"id":"333","name":"jason","age":"21"}
    ];
  }
  onButtonClick(){
    this.employees=[
    {"id":"000","name":"mary","age":"25"},
    {"id":"111","name":"andrew","age":"19"},
    {"id":"222","name":"kriston","age":"28"},
    {"id":"333","name":"jason","age":"21"},
    {"id":"444","name":"jade","age":"24"},
    {"id":"555","name":"vancouver","age":"27"}
    ]
  }
  
  trackById(employee,index){
    return employee.id
  }

  onDelete(employee){
    console.log(employee);
    this.employees
  }
}
