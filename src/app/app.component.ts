import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aukciju';

  lat: number = 45.267136;
  lng: number = 19.833549;

  setNewLocation(lat, long) {
    console.log(lat + ", " + long);
  }

}
