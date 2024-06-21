import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.directive";
export class DropdownMenuDirective {
    dropdown;
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    static ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(i0.ɵɵdirectiveInject(i1.DropdownDirective)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropdownMenuDirective, selectors: [["", "ngxDropdownMenu", ""]], hostVars: 4, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("dropdown-menu", true)("show", ctx.dropdown.isOpen);
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDropdownMenu]',
                host: {
                    '[class.dropdown-menu]': 'true',
                    '[class.show]': 'dropdown.isOpen'
                }
            }]
    }], () => [{ type: i1.DropdownDirective }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7OztBQVV2RCxNQUFNLE9BQU8scUJBQXFCO0lBRXZCO0lBRFQsWUFDUyxRQUEyQjtRQUEzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtJQUNoQyxDQUFDOytFQUhNLHFCQUFxQjs2REFBckIscUJBQXFCO1lBQXJCLGdDQUFBLElBQUksQ0FBaUIsNkJBQUE7OztpRkFBckIscUJBQXFCO2NBUGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixJQUFJLEVBQUU7b0JBQ0osdUJBQXVCLEVBQUUsTUFBTTtvQkFDL0IsY0FBYyxFQUFFLGlCQUFpQjtpQkFDbEM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4RHJvcGRvd25NZW51XScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmRyb3Bkb3duLW1lbnVdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2hvd10nOiAnZHJvcGRvd24uaXNPcGVuJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTWVudURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkcm9wZG93bjogRHJvcGRvd25EaXJlY3RpdmVcbiAgKSB7IH1cbn1cbiJdfQ==