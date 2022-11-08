import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/beer';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient ){}

  fetchBeers(beerName: string): Observable<Beer[]>{
     return this.http.get<Beer[]>(`${environment.baseUrl}/?beer_name=${beerName}`);
  }

}




  
