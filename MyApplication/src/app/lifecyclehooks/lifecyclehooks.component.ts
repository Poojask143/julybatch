import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehookComponent {
getData() {
throw new Error('Method not implemented.');
}
  name:any; //normal property
  @Input() surName:any;  //input property
 
constructor(private dataService:DataService){
  console.log("constructor calling..");
}
//A component instance has a lifecycle that starts when Angular
// instantiates the component class renders the component view and its child views.

//ngOnChange() if component is having @input bound properties then ngOnChanges lifecyclehook get trigger first
//NgOnInit()
//ngocheck()
//ngAfterContentInit()
//ngOnaDestroy()
//ngAfterContentChecked()
//ngAfterViewInit()
//ngAfterViewChecked()
ngOnChange(){
  console.log("onchages calling");
}
ngOnInit(){

  this.name = this.dataService.userName;
  console.log("oninit calling");
}
ngOnDoCheck(){
  console.log("do check calling");

}
ngAfterContentInit(){
  console.log("content init calling");
}
ngAfterContentChecked(){
  console.log("ngAfterContentChecked");
}
ngAfterInit(){
  console.log("ngAfterViewInit");
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked");
}

ngOnDestroy(){
  console.log("ngonDestroy");
}

getData()
 {
this.dataService.data.subscribe(data=>{
    
  console.log(data);
  })
 }
}