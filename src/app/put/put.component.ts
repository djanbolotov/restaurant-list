import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {
  alert = false;
  constructor( private data: DataService, private route: ActivatedRoute) { }

  addResto: any = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })



  updateID(){
    this.data.putID(this.route.snapshot.params.id, this.addResto.value ).subscribe();
    this.alert = true;
  }

  alertX(){
    this.alert = false;
    this.addResto.reset();
  }

  get name(){return this.addResto.get('name')};
  get address(){return this.addResto.get('address')};
  get email(){return this.addResto.get('email')};

  ngOnInit(): void {

    this.data.getID(this.route.snapshot.params.id).subscribe((data)=>{
      this.addResto = new FormGroup({
        name: new FormControl(data['name'], Validators.required),
        address: new FormControl(data['address'], Validators.required),
        email: new FormControl(data['email'], Validators.required)
      })
    })

  }

}
