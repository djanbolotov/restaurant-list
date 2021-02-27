import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  alert = false;


  constructor( private data: DataService ) { }

  addResto = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  get name(){return this.addResto.get('name')};
  get address(){return this.addResto.get('address')};
  get email(){return this.addResto.get('email')};


  newRest(){
    this.data.addRest(this.addResto.value).subscribe()
    this.alert = true;
    this.addResto.reset();
  }
  alertX(){
    this.alert = false;
  }
  ngOnInit(): void {
  }

}
