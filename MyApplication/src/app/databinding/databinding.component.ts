import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //DB: comunication between a component and the DOM.
  //1.one way databinding: it is a simple one way comunication where HTML template is changed when we make changes in TypeScript code

  //types:1 string interpolution {{}} -symbol
         // string interpolation is a one way databinding technique which is used to display data from typescript to (view)template 
    //    2.property Binding
     //   3.Event binding

  //2.two way databninding:[{}] -symbol


  data: string="I live in Ambajogai";
  amount:number =909090;
  schoolName! : string;
  isMatch=true;
  name="pooja...";
 clickEventData:any;
 city:any = "pune";



 //<!--  = :assignment operator: to assign value to variable or property

   //   == : equality operator: it compares value only
     //=== : it compare value as well as data type    -->


  test(){
    return 50*2;
  }
  clickEvent(){
    this.clickEventData =898988;
  }
  assignVal(){
    this.dataService.userName="priya";
    this.router.navigateByUr('lifecycleHooks');
  }


}
