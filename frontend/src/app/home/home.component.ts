
import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModal]

})

export class HomeComponent  implements OnInit{
  dataobject:any;
  myData: object;

constructor(private service: ServicesService, private modalService: NgbModal) {

  this.dataobject = {
    name:"",
    email:"",
    mobile:""

  }
 }



ngOnInit() {
  this.service.getData().subscribe((data:object)=>{
    this.myData = data;
   })

  
}
details(){
  this.service.create(this.dataobject).subscribe((data)=>{
    console.log(data);
    this.service.getData().subscribe((data:object)=>{
      this.myData = data;
     })
  
  })
  
  };


  openXl(content,d){
    this.modalService.open(content, { size: 'lg' });
    this.dataobject = d; 
  }

  update(){
    this.service.update(this.dataobject).subscribe((data:object)=>{
      console.log(this.dataobject);
      alert('saved')
        });
        this.modalService.dismissAll();
        
      
  
  }
  delete(id){
    if(window.confirm('are you sure you want to delete?'))
    {
        this.service.delete(id).subscribe(success => {
          if (success) {
            this.service.getData().subscribe((data)=>{
              this.myData = data;
             });

            alert('Deleted Successfully')
          }
        });
    };
  }

  }