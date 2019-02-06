import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-card-layout',
  templateUrl: './search-card-layout.component.html',
  styleUrls: ['./search-card-layout.component.css']
})
export class SearchCardLayoutComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
   // console.log(this.data);
    this.populateData(this.data);
  }

  populateData(doctors){
    console.log(JSON.parse(JSON.stringify(doctors.toString())));
  }

}
