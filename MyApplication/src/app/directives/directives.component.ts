import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent{

  public user: string="Mentor";

city="pune"
isShow =true; //null//undefined/faLse >>false

cars=['i10','i20',"swift","jagur"]
showDiv= true;
fruit="pappaya";
  
constructor(private dataService : DataService){}
  //directives are used to manipulate the DOM. By using Angular directives,
  //you can change the appearence,behaviour or a layout of a DOM element
  // 1.component Directives
  // 2.structural Directives
  //3.Attribute Directives

  //1.component Directives: component Directives are used in main class. they contain the detail of how the component should be processed.
  // instanitiated and used at runtime.
  //2.structural Directives: structural Directives start with a *sign.these ditrectives are used to manipulate and change the structure 
  // of the DOM elements.for example,*ngIf directive . *ngSwicth directive and *ngFor directive. 

  //*ngIf directive:the *ngIf allows us to Add/Remove DOM Element .
  //*ngFSwitch directive: the *Switch allows us to Add/Remove DOM Element.it is similar to switch statement of C++.
  //*ngFor directive: the *ngFor directibve is used to repeat a portion of HTML template once per each item from an iterable list(Collection)
  
  //Attribute Directives:Attribute directives are used to change the look and behaviour of the DOM elements example:ngClass directive,ngStyledirective
 
  //1 .ngClass Directive:  The ngClass directive is used to add orremove CSS classes to an HTML element.
  //2 .ngStyle Directive:  The ngStyle directive facilities you to modify the style of an HTML element using the expression.

  // you can also use ngStyle directive to dynamically change the style of your html element


toggle(){
  //this.showdiv=false;
  this.showDiv= !this.showDiv; //! T >> F / IF>>T
}

public getData(){
 this.user =this.dataService.userName;
 console.log("username",this.user);
}
}
