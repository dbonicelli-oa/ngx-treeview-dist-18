import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TreeviewComponent } from '../treeview/treeview.component';
import * as i0 from "@angular/core";
import * as i1 from "../../models/treeview-i18n";
import * as i2 from "../../models/treeview-config";
import * as i3 from "@angular/common";
import * as i4 from "../treeview/treeview.component";
import * as i5 from "../../directives/dropdown.directive";
import * as i6 from "../../directives/dropdown-menu.directive";
import * as i7 from "../../directives/dropdown-toggle.directive";
export class DropdownTreeviewComponent {
    i18n;
    defaultConfig;
    buttonClass = 'btn-outline-secondary';
    headerTemplate;
    itemTemplate;
    items;
    config;
    selectedChange = new EventEmitter(true);
    filterChange = new EventEmitter();
    treeviewComponent;
    buttonLabel;
    constructor(i18n, defaultConfig) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.config = this.defaultConfig;
    }
    onSelectedChange(values) {
        this.buttonLabel = this.i18n.getText(this.treeviewComponent.selection);
        this.selectedChange.emit(values);
    }
    onFilterChange(text) {
        this.filterChange.emit(text);
    }
    static ɵfac = function DropdownTreeviewComponent_Factory(t) { return new (t || DropdownTreeviewComponent)(i0.ɵɵdirectiveInject(i1.TreeviewI18n), i0.ɵɵdirectiveInject(i2.TreeviewConfig)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownTreeviewComponent, selectors: [["ngx-dropdown-treeview"]], viewQuery: function DropdownTreeviewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TreeviewComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewComponent = _t.first);
        } }, inputs: { buttonClass: "buttonClass", headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items", config: "config" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, decls: 6, vars: 6, consts: [["ngxDropdown", "", 1, "dropdown"], ["type", "button", "role", "button", "ngxDropdownToggle", "", 1, "btn", 3, "ngClass"], ["ngxDropdownMenu", "", "aria-labelledby", "dropdownMenu", 3, "click"], [1, "dropdown-container"], [3, "selectedChange", "filterChange", "config", "headerTemplate", "items", "itemTemplate"]], template: function DropdownTreeviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵlistener("click", function DropdownTreeviewComponent_Template_div_click_3_listener($event) { return $event.stopPropagation(); });
            i0.ɵɵelementStart(4, "div", 3)(5, "ngx-treeview", 4);
            i0.ɵɵlistener("selectedChange", function DropdownTreeviewComponent_Template_ngx_treeview_selectedChange_5_listener($event) { return ctx.onSelectedChange($event); })("filterChange", function DropdownTreeviewComponent_Template_ngx_treeview_filterChange_5_listener($event) { return ctx.onFilterChange($event); });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.buttonClass);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.buttonLabel, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("config", ctx.config)("headerTemplate", ctx.headerTemplate)("items", ctx.items)("itemTemplate", ctx.itemTemplate);
        } }, dependencies: [i3.NgClass, i4.TreeviewComponent, i5.DropdownDirective, i6.DropdownMenuDirective, i7.DropdownToggleDirective], styles: [".dropdown[_ngcontent-%COMP%]{width:100%;display:inline-block}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-right:.9rem;text-align:left;overflow:hidden;padding-right:30px;text-overflow:ellipsis}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{position:absolute;right:.6rem;margin-top:.6rem}.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]{padding:0 .6rem}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownTreeviewComponent, [{
        type: Component,
        args: [{ selector: 'ngx-dropdown-treeview', template: "<div class=\"dropdown\" ngxDropdown>\n  <button class=\"btn\" [ngClass]=\"buttonClass\" type=\"button\" role=\"button\" ngxDropdownToggle>\n    {{buttonLabel}}\n  </button>\n  <div ngxDropdownMenu aria-labelledby=\"dropdownMenu\" (click)=\"$event.stopPropagation()\">\n    <div class=\"dropdown-container\">\n      <ngx-treeview [config]=\"config\" [headerTemplate]=\"headerTemplate\" [items]=\"items\" [itemTemplate]=\"itemTemplate\"\n        (selectedChange)=\"onSelectedChange($event)\" (filterChange)=\"onFilterChange($event)\">\n      </ngx-treeview>\n    </div>\n  </div>\n</div>\n", styles: [".dropdown{width:100%;display:inline-block}.dropdown button{width:100%;margin-right:.9rem;text-align:left;overflow:hidden;padding-right:30px;text-overflow:ellipsis}.dropdown button:after{position:absolute;right:.6rem;margin-top:.6rem}.dropdown .dropdown-menu .dropdown-container{padding:0 .6rem}\n"] }]
    }], () => [{ type: i1.TreeviewI18n }, { type: i2.TreeviewConfig }], { buttonClass: [{
            type: Input
        }], headerTemplate: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], items: [{
            type: Input
        }], config: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], filterChange: [{
            type: Output
        }], treeviewComponent: [{
            type: ViewChild,
            args: [TreeviewComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownTreeviewComponent, { className: "DropdownTreeviewComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdHJlZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi10cmVldmlldy9kcm9wZG93bi10cmVldmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duLXRyZWV2aWV3L2Ryb3Bkb3duLXRyZWV2aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBSS9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7QUFTbkUsTUFBTSxPQUFPLHlCQUF5QjtJQVkzQjtJQUNDO0lBWkQsV0FBVyxHQUFHLHVCQUF1QixDQUFDO0lBQ3RDLGNBQWMsQ0FBNkM7SUFDM0QsWUFBWSxDQUEyQztJQUN2RCxLQUFLLENBQWlCO0lBQ3RCLE1BQU0sQ0FBaUI7SUFDdEIsY0FBYyxHQUFHLElBQUksWUFBWSxDQUFRLElBQUksQ0FBQyxDQUFDO0lBQy9DLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBQ0gsaUJBQWlCLENBQW9CO0lBQ3RGLFdBQVcsQ0FBUztJQUVwQixZQUNTLElBQWtCLEVBQ2pCLGFBQTZCO1FBRDlCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBRXJDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBYTtRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzttRkF6QlUseUJBQXlCOzZEQUF6Qix5QkFBeUI7MkJBUXpCLGlCQUFpQjs7Ozs7WUNwQjVCLEFBREYsOEJBQWtDLGdCQUMwRDtZQUN4RixZQUNGO1lBQUEsaUJBQVM7WUFDVCw4QkFBdUY7WUFBbkMseUdBQVMsd0JBQXdCLElBQUM7WUFFbEYsQUFERiw4QkFBZ0Msc0JBRXdEO1lBQXhDLEFBQTVDLG9JQUFrQiw0QkFBd0IsSUFBQyxtSEFBaUIsMEJBQXNCLElBQUM7WUFJM0YsQUFERSxBQURFLEFBREUsaUJBQWUsRUFDWCxFQUNGLEVBQ0Y7O1lBVmdCLGNBQXVCO1lBQXZCLHlDQUF1QjtZQUN6QyxjQUNGO1lBREUsZ0RBQ0Y7WUFHa0IsZUFBaUI7WUFBbUQsQUFBaEIsQUFBbEMsQUFBbEIsbUNBQWlCLHNDQUFrQyxvQkFBZ0Isa0NBQThCOzs7aUZET3hHLHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLHVCQUF1QjswRUFLeEIsV0FBVztrQkFBbkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDMEMsaUJBQWlCO2tCQUFqRSxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0ZBUnBDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVldmlld0kxOG4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaTE4bic7XG5pbXBvcnQgeyBUcmVldmlld0l0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaXRlbSc7XG5pbXBvcnQgeyBUcmVldmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1jb25maWcnO1xuaW1wb3J0IHsgVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi90cmVldmlldy90cmVldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZXZpZXdIZWFkZXJUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaGVhZGVyLXRlbXBsYXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0tdGVtcGxhdGUtY29udGV4dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wZG93bi10cmVldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi10cmVldmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLXRyZWV2aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25UcmVldmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJ1dHRvbkNsYXNzID0gJ2J0bi1vdXRsaW5lLXNlY29uZGFyeSc7XG4gIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUcmVldmlld0hlYWRlclRlbXBsYXRlQ29udGV4dD47XG4gIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0PjtcbiAgQElucHV0KCkgaXRlbXM6IFRyZWV2aWV3SXRlbVtdO1xuICBASW5wdXQoKSBjb25maWc6IFRyZWV2aWV3Q29uZmlnO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPih0cnVlKTtcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAVmlld0NoaWxkKFRyZWV2aWV3Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgdHJlZXZpZXdDb21wb25lbnQ6IFRyZWV2aWV3Q29tcG9uZW50O1xuICBidXR0b25MYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpMThuOiBUcmVldmlld0kxOG4sXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBUcmVldmlld0NvbmZpZ1xuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuXG4gIG9uU2VsZWN0ZWRDaGFuZ2UodmFsdWVzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9uTGFiZWwgPSB0aGlzLmkxOG4uZ2V0VGV4dCh0aGlzLnRyZWV2aWV3Q29tcG9uZW50LnNlbGVjdGlvbik7XG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHZhbHVlcyk7XG4gIH1cblxuICBvbkZpbHRlckNoYW5nZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHRleHQpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIiBuZ3hEcm9wZG93bj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzXCIgdHlwZT1cImJ1dHRvblwiIHJvbGU9XCJidXR0b25cIiBuZ3hEcm9wZG93blRvZ2dsZT5cbiAgICB7e2J1dHRvbkxhYmVsfX1cbiAgPC9idXR0b24+XG4gIDxkaXYgbmd4RHJvcGRvd25NZW51IGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudVwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XG4gICAgICA8bmd4LXRyZWV2aWV3IFtjb25maWddPVwiY29uZmlnXCIgW2hlYWRlclRlbXBsYXRlXT1cImhlYWRlclRlbXBsYXRlXCIgW2l0ZW1zXT1cIml0ZW1zXCIgW2l0ZW1UZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIlxuICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25TZWxlY3RlZENoYW5nZSgkZXZlbnQpXCIgKGZpbHRlckNoYW5nZSk9XCJvbkZpbHRlckNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8L25neC10cmVldmlldz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==