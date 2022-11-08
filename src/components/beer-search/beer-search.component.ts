import { Component, OnInit } from '@angular/core';
import {BeerService} from '../../services/beer/beer.service';


@Component({
  selector: 'beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css'],
  providers: [BeerService]
})
export class BeerSearchComponent implements OnInit {

  title = 'Angular Beer Search';
  searchText: string;
  beers = Array();
  error: string;
  
  constructor(private _beerService: BeerService) {
    
   }

  //responsible for retrieving data via the service
  searchBeer(){
    if(this.searchText!==""){
    this._beerService.fetchBeers(this.searchText).subscribe(data=>{
      this.error= 'nothing found'
      if(data.length!==0){
        for(let i=0;i<data.length; i++){        
          this.beers.push(data[i]);
          this.error = ''
        }
      }
    }
    );
  }
  this.error = 'type something into the search box'
  this.beers = [];

  }

  //allows to call search function upon pressing enter
  onEnter(e) { 
    if(e.keyCode === 13){
      this.searchBeer();
   }
  }

  ngOnInit(): void {
    
  }

}
