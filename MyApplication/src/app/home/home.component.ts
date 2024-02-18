import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({     //component directive:metadata of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { //component class:number of properties,constructor,lifecycle,hooks,methods etc
      //property section
     //let/var/const city="pune" var in js

     city: string="pune";//property
     surName:any=true;
     name:string="pooja";
     name2!:string                             // ! -not operator
     name3:any;     

  constructor(private router:Router , private dataService :DataService){}//construction section  
                                                                    //denpendency injection  he constructor madhech iject kele jatat

  ngOnInit(){
    this.dataService.uersName= this.name;
    console.log("ngOnInit calling");
  }
 

  //lifeccycle hook,methods
  SignUpComp(){

    this.name3="omsai";
    console.log("city>>",this.city);
    console.log("signcompo fun calling");
    this.test();
    this.router.navigateByUrl("SignUp");
  }
  test(){
    console.log("test calling...");
}
directives(){
  this.router.navigateByUrl('directives')
}

}