import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModule } from './data/data.module';


@Injectable({
  providedIn: 'root'
})
export class AffichageService  {

   apiURL: String = 'https://docs.octave.dev/docs/using-the-rest-api-in-an-external-system';
  
   constructor(private http: HttpClient) {

  }
 

  getData () : Observable< any[]>{
  
      const url = "https://octave-api.sierrawireless.io/v5.0/orangesb/device/d61f111598adbc61c5c0c1272";
      let headers = new HttpHeaders().set('X-Auth-Token', "8ypwg55Yy4EK5lLPTshu6mx3mRMEBFTb");
      headers = headers.append('X-Auth-User','sb_orange');
      return this.http.get<any[]>(url, {headers:headers})

    }
  }


 





