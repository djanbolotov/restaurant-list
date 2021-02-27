import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: any;

  constructor(private data: DataService) {}
  updateID(id){
    console.log(this.list.id);
    
  }

  async removeID(number){
    this.data.removeRest(number).subscribe();
    this.data.getList().subscribe((data)=>{
      this.list = data;
    });
  }


  ngOnInit(): void {

    this.data.getList().subscribe((data)=>{
      this.list = data;
    })
    
  }

}
