import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [NgbModal]

})
export class EditComponent implements OnInit {
dataobject:any;
myData:any;
p:number =1;
term :any;

  constructor(private service:ServicesService, private modalService: NgbModal) { 
    this.dataobject = {
      name:"",
      email:"",
      mobile:""
  
    }
  
  }

  ngOnInit(): void {
    this.service.getData().subscribe((data:object)=>{
      this.myData = data;
     })
  }


//Update Data
  update(){
    this.service.update(this.dataobject).subscribe((data:object)=>{
      console.log(this.dataobject);
      alert('saved')
        });
        
      
  
  }

  //Open Modal
  openXl(content,d){
    this.modalService.open(content, { size: 'lg' });
    this.dataobject = d; 
  }


  //Delete Data
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
