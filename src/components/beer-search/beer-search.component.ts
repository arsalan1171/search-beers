import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { BeerService } from '../../services/beer/beer.service';

@Component({
  selector: 'beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css'],
  providers: [BeerService]
})
export class BeerSearchComponent implements OnInit {

  title = 'Angular Beer Search';

  beers: any[] = [];
  searchText = '';
  error = '';
  selectedBeer: any;
  hasSelectedOption = false;

  constructor(private _beerService: BeerService) {}

  ngOnInit(): void {}

  searchBeer() {
    if (this.searchText === '') {
      this.error = 'Type something into the search box';
      return;
    }
  
    this._beerService.fetchBeers(this.searchText).subscribe(
      (data: any) => {
        if (data.length === 0) {
          this.error = 'Nothing found';
        } else {
          this.beers = data;
          this.error = '';
          this.searchText = ''; // clear the search box
        }
      },
      (error: any) => {
        this.error = 'Something went wrong';
        console.error(error);
      }
    );
  }
  
  onEnter(e: any) {
    if (e.keyCode === 13) {
      this.searchBeer();
    }
  }

  onSelectionChange(event: MatSelectionListChange) {
    if (event.option.selected) {
      this.selectedBeer = event.option.value;
      this.hasSelectedOption = true;
    } else {
      this.selectedBeer = undefined;
      this.hasSelectedOption = false;
    }
  }
}
