import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {



  lat = 14.7569;
  lng =  -17.4347;

  constructor() { }

  ngOnInit(): void {
  }

}
