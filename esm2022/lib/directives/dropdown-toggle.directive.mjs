import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.directive";
export class DropdownToggleDirective {
    dropdown;
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
    static ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(i0.ɵɵdirectiveInject(i1.DropdownDirective), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropdownToggleDirective, selectors: [["", "ngxDropdownToggle", ""]], hostAttrs: ["aria-haspopup", "true", 1, "dropdown-toggle"], hostVars: 1, hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler() { return ctx.dropdown.toggle(); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-expanded", ctx.dropdown.isOpen);
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDropdownToggle]',
                host: {
                    class: 'dropdown-toggle',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'dropdown.isOpen',
                    '(click)': 'dropdown.toggle()'
                }
            }]
    }], () => [{ type: i1.DropdownDirective }, { type: i0.ElementRef }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL2RpcmVjdGl2ZXMvZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7QUFZdEQsTUFBTSxPQUFPLHVCQUF1QjtJQUV6QjtJQURULFlBQ1MsUUFBMkIsRUFDbEMsVUFBc0I7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUdsQyxRQUFRLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDcEQsQ0FBQztpRkFOVSx1QkFBdUI7NkRBQXZCLHVCQUF1QjtZQUF2Qiw0RkFBQSxxQkFBaUIsSUFBTTs7Ozs7aUZBQXZCLHVCQUF1QjtjQVRuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLGVBQWUsRUFBRSxNQUFNO29CQUN2QixzQkFBc0IsRUFBRSxpQkFBaUI7b0JBQ3pDLFNBQVMsRUFBRSxtQkFBbUI7aUJBQy9CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4RHJvcGRvd25Ub2dnbGVdJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZHJvcGRvd24tdG9nZ2xlJyxcbiAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcbiAgICAnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAnZHJvcGRvd24uaXNPcGVuJyxcbiAgICAnKGNsaWNrKSc6ICdkcm9wZG93bi50b2dnbGUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkcm9wZG93bjogRHJvcGRvd25EaXJlY3RpdmUsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICBkcm9wZG93bi50b2dnbGVFbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=