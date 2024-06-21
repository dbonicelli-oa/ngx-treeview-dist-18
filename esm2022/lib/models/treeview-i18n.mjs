import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeviewI18n {
    static ɵfac = function TreeviewI18n_Factory(t) { return new (t || TreeviewI18n)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TreeviewI18n, factory: TreeviewI18n.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewI18n, [{
        type: Injectable
    }], null, null); })();
export class DefaultTreeviewI18n extends TreeviewI18n {
    getText(selection) {
        if (selection.uncheckedItems.length === 0) {
            if (selection.checkedItems.length > 0) {
                return this.getAllCheckboxText();
            }
            else {
                return '';
            }
        }
        switch (selection.checkedItems.length) {
            case 0:
                return 'Select options';
            case 1:
                return selection.checkedItems[0].text;
            default:
                return `${selection.checkedItems.length} options selected`;
        }
    }
    getAllCheckboxText() {
        return 'All';
    }
    getFilterPlaceholder() {
        return 'Filter';
    }
    getFilterNoItemsFoundText() {
        return 'No items found';
    }
    getTooltipCollapseExpandText(isCollapse) {
        return isCollapse ? 'Expand' : 'Collapse';
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵDefaultTreeviewI18n_BaseFactory; return function DefaultTreeviewI18n_Factory(t) { return (ɵDefaultTreeviewI18n_BaseFactory || (ɵDefaultTreeviewI18n_BaseFactory = i0.ɵɵgetInheritedFactory(DefaultTreeviewI18n)))(t || DefaultTreeviewI18n); }; })();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DefaultTreeviewI18n, factory: DefaultTreeviewI18n.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultTreeviewI18n, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL21vZGVscy90cmVldmlldy1pMThuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBZ0IsWUFBWTtzRUFBWixZQUFZO2dFQUFaLFlBQVksV0FBWixZQUFZOztpRkFBWixZQUFZO2NBRGpDLFVBQVU7O0FBVVgsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFlBQVk7SUFDbkQsT0FBTyxDQUFDLFNBQTRCO1FBQ2xDLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNuQyxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDO1FBQ0gsQ0FBQztRQUVELFFBQVEsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxLQUFLLENBQUM7Z0JBQ0osT0FBTyxnQkFBZ0IsQ0FBQztZQUMxQixLQUFLLENBQUM7Z0JBQ0osT0FBTyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QztnQkFDRSxPQUFPLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLG1CQUFtQixDQUFDO1FBQy9ELENBQUM7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQseUJBQXlCO1FBQ3ZCLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVELDRCQUE0QixDQUFDLFVBQW1CO1FBQzlDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM1QyxDQUFDO3lPQWxDVSxtQkFBbUIsU0FBbkIsbUJBQW1CO2dFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1COztpRkFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVldmlld1NlbGVjdGlvbiB9IGZyb20gJy4vdHJlZXZpZXctaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmVldmlld0kxOG4ge1xuICBhYnN0cmFjdCBnZXRUZXh0KHNlbGVjdGlvbjogVHJlZXZpZXdTZWxlY3Rpb24pOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldEFsbENoZWNrYm94VGV4dCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldEZpbHRlclBsYWNlaG9sZGVyKCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0RmlsdGVyTm9JdGVtc0ZvdW5kVGV4dCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldFRvb2x0aXBDb2xsYXBzZUV4cGFuZFRleHQoaXNDb2xsYXBzZTogYm9vbGVhbik6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlZmF1bHRUcmVldmlld0kxOG4gZXh0ZW5kcyBUcmVldmlld0kxOG4ge1xuICBnZXRUZXh0KHNlbGVjdGlvbjogVHJlZXZpZXdTZWxlY3Rpb24pOiBzdHJpbmcge1xuICAgIGlmIChzZWxlY3Rpb24udW5jaGVja2VkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoc2VsZWN0aW9uLmNoZWNrZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbENoZWNrYm94VGV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoc2VsZWN0aW9uLmNoZWNrZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuICdTZWxlY3Qgb3B0aW9ucyc7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24uY2hlY2tlZEl0ZW1zWzBdLnRleHQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYCR7c2VsZWN0aW9uLmNoZWNrZWRJdGVtcy5sZW5ndGh9IG9wdGlvbnMgc2VsZWN0ZWRgO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbENoZWNrYm94VGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQWxsJztcbiAgfVxuXG4gIGdldEZpbHRlclBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdGaWx0ZXInO1xuICB9XG5cbiAgZ2V0RmlsdGVyTm9JdGVtc0ZvdW5kVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnTm8gaXRlbXMgZm91bmQnO1xuICB9XG5cbiAgZ2V0VG9vbHRpcENvbGxhcHNlRXhwYW5kVGV4dChpc0NvbGxhcHNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNDb2xsYXBzZSA/ICdFeHBhbmQnIDogJ0NvbGxhcHNlJztcbiAgfVxufVxuIl19