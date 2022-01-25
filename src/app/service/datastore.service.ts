import { Injectable } from '@angular/core';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  vaccinated:Data[]=[];
  curr:Data=new Data();

  users:Data[]=[];
  user:Data=new Data();

  constructor() { }
  setData(ip: Data){
    this.user=ip;
    this.users.push(this.user);
    const jsonData = JSON.stringify(this.users);
    localStorage.setItem('myData',jsonData);
  }
  checkVaccinated(email:string|null):boolean{
    if(this.vaccinated.length==0)
      return false;
    for(let i=0;i<this.vaccinated.length;i++){
      if(this.vaccinated[i].email==email){
        return true;
      }
    }
    return false;
  }
  addVaccinated(ip: Data){
    this.curr=ip;
    this.vaccinated.push(this.curr);
    const jsonData=JSON.stringify(this.vaccinated);
    localStorage.setItem('vaccinated',jsonData);
  }
  matchData(email:string|null):Data{
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        return data[i];
      }
    }
    return new Data();
  }
  
}
