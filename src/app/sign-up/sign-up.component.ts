import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { DatastoreService } from '../service/datastore.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  people:Data=new Data();

  constructor(private dataStore: DatastoreService,private router:Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.dataStore.setData(this.people);
    this.people = new Data();
    this.router.navigateByUrl("/login");
  }

}
