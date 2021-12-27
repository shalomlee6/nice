import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_BASE_URL = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getToket(){
     
    let url = this.API_BASE_URL  ;

    return this.httpClient.get(url);
  }


}
