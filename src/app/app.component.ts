import { Component } from '@angular/core';
import { AffichageService } from './affichage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Octave';
  Name : String ='' ;
  NumeroSerie :String='';
  temperature :String ='';
  pression :String='';
  humidity :String ='';
  batteryPercent :any ;
  batteryValeur :String ='';
  ba:String='';
  ca:String='';
 
 

  constructor(private   DataService: AffichageService){
    this.DataService.getData().subscribe(data => {

    })

  }


  ngOnInit() : void {
    this.DataService.getData().subscribe((data :any) =>{
      this.Name=data["body"]["name"]
      console.log(data["body"]["name"])
      this.NumeroSerie=data["body"]['hardware']['fsn']
      this.temperature=JSON.parse(data['body']["summary"]['/environment/value']['s'])["temperature"]
      this.humidity=JSON.parse(data['body']["summary"]['/environment/value']['s'])["humidity"]
      this.pression=JSON.parse(data['body']["summary"]['/environment/value']['s'])["pressure"]
      console.log(data['body']["summary"]['/environment/value']['s'])
      this.batteryValeur=JSON.parse(data['body']["summary"]['/battery/value']['s'])["V"]
      this.batteryPercent=JSON.parse(data['body']["summary"]['/battery/value']['s'])["percent"]
      this.ba=JSON.parse(data['body']["summary"]['/battery/value']['s'])["health"] 
      this.ca=JSON.parse(data['body']["summary"]['/battery/value']['s'])["charging"] 
      console.log(data['body']["summary"]['/battery/value']['s'])
      

    })

  }

}
