import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() selectedPath = new EventEmitter<'RECIPE' | 'SHOPPING'>();

  public onSelect(path: 'SHOPPING' | 'RECIPE'): void {
    this.selectedPath.emit(path);
  }
}