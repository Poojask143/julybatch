import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
//what are subjects?
//subject is special type of observable that alllows to be  multicasted to many oberservers . the subjects are also observers
// because they can subscribe observable and get value from it, which it will multicast to all od its subscribers.
data="pooja";
constructor(private dataService: DataService){}

ngOnInit(){
  //this.setData()
  //this.dataService.data.next(this.data);
}
setData(){
  this.dataService.data.next(this.data);
}
}

