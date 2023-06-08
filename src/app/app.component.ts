import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loadedFeature: 'RECIPE' | 'SHOPPING' = 'RECIPE';

  public onNavigate(key: 'RECIPE' | 'SHOPPING'): void {
    this.loadedFeature = key;
  }
}
