import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private toggleClass: boolean = true;

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    this.toggleClass = !this.toggleClass;
    const iconElem: HTMLElement = this._elRef.nativeElement.querySelector('mat-icon');
    const listElem: HTMLElement = this._elRef.nativeElement.nextElementSibling;

    if (this.toggleClass) {
      this._renderer.addClass(listElem, 'hide');
      this._renderer.removeClass(listElem, 'show');
      iconElem.classList.remove('rotate-icon');
    } else {
      this._renderer.removeClass(listElem, 'hide');
      this._renderer.addClass(listElem, 'show');
      iconElem.classList.add('rotate-icon');
    }
  }
}
