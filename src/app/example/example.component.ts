import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-example',
  imports: [FormsModule,CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
today=new Date().getDay();

amount = 123.45;
company = 'acme corporation';
purchasedOn = '2024-07-08';
public eventDate: Date = new Date(1983,3,15);

}

  // stlist=[
//   {id:1,name:'Elani',Mark:98},
//   {id:2,name:'Jothis',Mark:88},
//   {id:3,name:'Vasan',Mark:100},
// ]




  // msg="";
  // check:boolean=false;
  // display(){
  //   this.check=false;
  // }

  // buttonstatus="Button not clicked";
  // display(){
  //   this.buttonstatus="Button clicked";
  // }


  // name="Elani";
  // dclass="danger"
  // num:number=100;
  // Name:string="Elani";
  // check:boolean=true;
  // display(){
  //   return "welcome..."+this.Name;
  // }


