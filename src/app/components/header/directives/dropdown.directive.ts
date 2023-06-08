import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private toggleClass: boolean = true;

  constructor(private _elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen() {
    this.toggleClass = !this.toggleClass;
    const iconElem: HTMLElement = this._elRef.nativeElement.querySelector('mat-icon')
    if (this.toggleClass) {
      this.renderer.addClass(this._elRef.nativeElement.nextElementSibling, 'hide');
      this.renderer.removeClass(this._elRef.nativeElement.nextElementSibling, 'show');
      iconElem.classList.remove("rotate-icon")
    } else {
      this.renderer.removeClass(this._elRef.nativeElement.nextElementSibling, 'hide');
      this.renderer.addClass(this._elRef.nativeElement.nextElementSibling, 'show');
      iconElem.classList.add("rotate-icon")
    }
  }
}
