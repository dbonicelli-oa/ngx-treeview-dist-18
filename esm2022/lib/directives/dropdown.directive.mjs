import { Directive, Input, Output, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
export class DropdownDirective {
    toggleElement;
    internalOpen = false;
    openChange = new EventEmitter();
    get isOpen() {
        return this.internalOpen;
    }
    onKeyupEsc() {
        this.close();
    }
    onDocumentClick(event) {
        if (event.button !== 2 && !this.isEventFromToggle(event)) {
            this.close();
        }
    }
    open() {
        if (!this.internalOpen) {
            this.internalOpen = true;
            this.openChange.emit(true);
        }
    }
    close() {
        if (this.internalOpen) {
            this.internalOpen = false;
            this.openChange.emit(false);
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    isEventFromToggle(event) {
        return !isNil(this.toggleElement) && this.toggleElement.contains(event.target);
    }
    static ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropdownDirective, selectors: [["", "ngxDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.esc", function DropdownDirective_keyup_esc_HostBindingHandler() { return ctx.onKeyupEsc(); })("click", function DropdownDirective_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, i0.ɵɵresolveDocument);
        } if (rf & 2) {
            i0.ɵɵclassProp("show", ctx.isOpen);
        } }, inputs: { internalOpen: [0, "open", "internalOpen"] }, outputs: { openChange: "openChange" }, exportAs: ["ngxDropdown"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDropdown]',
                exportAs: 'ngxDropdown'
            }]
    }], null, { internalOpen: [{
            type: Input,
            args: ['open']
        }], openChange: [{
            type: Output
        }], isOpen: [{
            type: HostBinding,
            args: ['class.show']
        }], onKeyupEsc: [{
            type: HostListener,
            args: ['keyup.esc']
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvZGlyZWN0aXZlcy9kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBTS9CLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsYUFBYSxDQUFNO0lBQ0osWUFBWSxHQUFHLEtBQUssQ0FBQztJQUMxQixVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVuRCxJQUErQixNQUFNO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHRCxlQUFlLENBQUMsS0FBaUI7UUFDL0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRixDQUFDOzJFQTdDVSxpQkFBaUI7NkRBQWpCLGlCQUFpQjtZQUFqQiw4RkFBQSxnQkFBWSxJQUFLLCtFQUFqQiwyQkFDVixpQ0FEMkI7O1lBQWpCLGtDQUFpQjs7O2lGQUFqQixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsYUFBYTthQUN4QjtnQkFHZ0IsWUFBWTtrQkFBMUIsS0FBSzttQkFBQyxNQUFNO1lBQ0gsVUFBVTtrQkFBbkIsTUFBTTtZQUV3QixNQUFNO2tCQUFwQyxXQUFXO21CQUFDLFlBQVk7WUFLekIsVUFBVTtrQkFEVCxZQUFZO21CQUFDLFdBQVc7WUFNekIsZUFBZTtrQkFEZCxZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnbG9kYXNoJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neERyb3Bkb3duXScsXG4gIGV4cG9ydEFzOiAnbmd4RHJvcGRvd24nXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duRGlyZWN0aXZlIHtcbiAgdG9nZ2xlRWxlbWVudDogYW55O1xuICBASW5wdXQoJ29wZW4nKSBpbnRlcm5hbE9wZW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93JykgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE9wZW47XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cC5lc2MnKVxuICBvbktleXVwRXNjKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMiAmJiAhdGhpcy5pc0V2ZW50RnJvbVRvZ2dsZShldmVudCkpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbnRlcm5hbE9wZW4pIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVybmFsT3Blbikge1xuICAgICAgdGhpcy5pbnRlcm5hbE9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNFdmVudEZyb21Ub2dnbGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzTmlsKHRoaXMudG9nZ2xlRWxlbWVudCkgJiYgdGhpcy50b2dnbGVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gIH1cbn1cbiJdfQ==