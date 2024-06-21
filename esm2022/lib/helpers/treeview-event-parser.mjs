import { Injectable } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
export class TreeviewEventParser {
    static ɵfac = function TreeviewEventParser_Factory(t) { return new (t || TreeviewEventParser)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TreeviewEventParser, factory: TreeviewEventParser.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
export class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const checkedItems = component.selection.checkedItems;
        if (!isNil(checkedItems)) {
            return checkedItems.map(item => item.value);
        }
        return [];
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵDefaultTreeviewEventParser_BaseFactory; return function DefaultTreeviewEventParser_Factory(t) { return (ɵDefaultTreeviewEventParser_BaseFactory || (ɵDefaultTreeviewEventParser_BaseFactory = i0.ɵɵgetInheritedFactory(DefaultTreeviewEventParser)))(t || DefaultTreeviewEventParser); }; })();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DefaultTreeviewEventParser, factory: DefaultTreeviewEventParser.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultTreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
export class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const items = component.items;
        if (!isNil(items)) {
            let result = [];
            items.forEach(item => {
                const links = this.getLinks(item, null);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        return [];
    }
    getLinks(item, parent) {
        if (!isNil(item.children)) {
            const link = {
                item,
                parent
            };
            let result = [];
            item.children.forEach(child => {
                const links = this.getLinks(child, link);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        if (item.checked) {
            return [{
                    item,
                    parent
                }];
        }
        return null;
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵDownlineTreeviewEventParser_BaseFactory; return function DownlineTreeviewEventParser_Factory(t) { return (ɵDownlineTreeviewEventParser_BaseFactory || (ɵDownlineTreeviewEventParser_BaseFactory = i0.ɵɵgetInheritedFactory(DownlineTreeviewEventParser)))(t || DownlineTreeviewEventParser); }; })();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DownlineTreeviewEventParser, factory: DownlineTreeviewEventParser.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DownlineTreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
export class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    currentDownlines = [];
    parser = new DownlineTreeviewEventParser();
    getSelectedChange(component) {
        const newDownlines = this.parser.getSelectedChange(component);
        if (this.currentDownlines.length === 0) {
            this.currentDownlines = newDownlines;
        }
        else {
            const intersectDownlines = [];
            this.currentDownlines.forEach(downline => {
                let foundIndex = -1;
                const length = newDownlines.length;
                for (let i = 0; i < length; i++) {
                    if (downline.item.value === newDownlines[i].item.value) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    intersectDownlines.push(newDownlines[foundIndex]);
                    newDownlines.splice(foundIndex, 1);
                }
            });
            this.currentDownlines = intersectDownlines.concat(newDownlines);
        }
        return this.currentDownlines;
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵOrderDownlineTreeviewEventParser_BaseFactory; return function OrderDownlineTreeviewEventParser_Factory(t) { return (ɵOrderDownlineTreeviewEventParser_BaseFactory || (ɵOrderDownlineTreeviewEventParser_BaseFactory = i0.ɵɵgetInheritedFactory(OrderDownlineTreeviewEventParser)))(t || OrderDownlineTreeviewEventParser); }; })();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrderDownlineTreeviewEventParser, factory: OrderDownlineTreeviewEventParser.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderDownlineTreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctZXZlbnQtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvaGVscGVycy90cmVldmlldy1ldmVudC1wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUsvQixNQUFNLE9BQWdCLG1CQUFtQjs2RUFBbkIsbUJBQW1CO2dFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1COztpRkFBbkIsbUJBQW1CO2NBRHhDLFVBQVU7O0FBTVgsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjtJQUNqRSxpQkFBaUIsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDekIsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7cVFBUlUsMEJBQTBCLFNBQTFCLDBCQUEwQjtnRUFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQjs7aUZBQTFCLDBCQUEwQjtjQUR0QyxVQUFVOztBQWtCWCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsbUJBQW1CO0lBQ2xFLGlCQUFpQixDQUFDLFNBQTRCO1FBQzVDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2xCLElBQUksTUFBTSxHQUEyQixFQUFFLENBQUM7WUFDeEMsS0FBSyxDQUFDLE9B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QztnQkFDckMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs2UkE5QlUsZ0NBQWdDLFNBQWhDLGdDQUFnQztnRUFBaEMsZ0NBQWdDLFdBQWhDLGdDQUFnQzs7aUZBQWhDLGdDQUFnQztjQUQ1QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0nO1xuaW1wb3J0IHsgVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmVldmlld0V2ZW50UGFyc2VyIHtcbiAgYWJzdHJhY3QgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRyZWV2aWV3RXZlbnRQYXJzZXIgZXh0ZW5kcyBUcmVldmlld0V2ZW50UGFyc2VyIHtcbiAgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdIHtcbiAgICBjb25zdCBjaGVja2VkSXRlbXMgPSBjb21wb25lbnQuc2VsZWN0aW9uLmNoZWNrZWRJdGVtcztcbiAgICBpZiAoIWlzTmlsKGNoZWNrZWRJdGVtcykpIHtcbiAgICAgIHJldHVybiBjaGVja2VkSXRlbXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxpbmVUcmVldmlld0l0ZW0ge1xuICBpdGVtOiBUcmVldmlld0l0ZW07XG4gIHBhcmVudDogRG93bmxpbmVUcmVldmlld0l0ZW07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb3dubGluZVRyZWV2aWV3RXZlbnRQYXJzZXIgZXh0ZW5kcyBUcmVldmlld0V2ZW50UGFyc2VyIHtcbiAgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdIHtcbiAgICBjb25zdCBpdGVtcyA9IGNvbXBvbmVudC5pdGVtcztcbiAgICBpZiAoIWlzTmlsKGl0ZW1zKSkge1xuICAgICAgbGV0IHJlc3VsdDogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbGlua3MgPSB0aGlzLmdldExpbmtzKGl0ZW0sIG51bGwpO1xuICAgICAgICBpZiAoIWlzTmlsKGxpbmtzKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQobGlua3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcml2YXRlIGdldExpbmtzKGl0ZW06IFRyZWV2aWV3SXRlbSwgcGFyZW50OiBEb3dubGluZVRyZWV2aWV3SXRlbSk6IERvd25saW5lVHJlZXZpZXdJdGVtW10ge1xuICAgIGlmICghaXNOaWwoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSB7XG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHBhcmVudFxuICAgICAgfTtcbiAgICAgIGxldCByZXN1bHQ6IERvd25saW5lVHJlZXZpZXdJdGVtW10gPSBbXTtcbiAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5nZXRMaW5rcyhjaGlsZCwgbGluayk7XG4gICAgICAgIGlmICghaXNOaWwobGlua3MpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChsaW5rcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBpdGVtLFxuICAgICAgICBwYXJlbnRcbiAgICAgIH1dO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckRvd25saW5lVHJlZXZpZXdFdmVudFBhcnNlciBleHRlbmRzIFRyZWV2aWV3RXZlbnRQYXJzZXIge1xuICBwcml2YXRlIGN1cnJlbnREb3dubGluZXM6IERvd25saW5lVHJlZXZpZXdJdGVtW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJzZXIgPSBuZXcgRG93bmxpbmVUcmVldmlld0V2ZW50UGFyc2VyKCk7XG5cbiAgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdIHtcbiAgICBjb25zdCBuZXdEb3dubGluZXM6IERvd25saW5lVHJlZXZpZXdJdGVtW10gPSB0aGlzLnBhcnNlci5nZXRTZWxlY3RlZENoYW5nZShjb21wb25lbnQpO1xuICAgIGlmICh0aGlzLmN1cnJlbnREb3dubGluZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnREb3dubGluZXMgPSBuZXdEb3dubGluZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdERvd25saW5lczogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgICAgdGhpcy5jdXJyZW50RG93bmxpbmVzLmZvckVhY2goZG93bmxpbmUgPT4ge1xuICAgICAgICBsZXQgZm91bmRJbmRleCA9IC0xO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXdEb3dubGluZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRvd25saW5lLml0ZW0udmFsdWUgPT09IG5ld0Rvd25saW5lc1tpXS5pdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICBmb3VuZEluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGludGVyc2VjdERvd25saW5lcy5wdXNoKG5ld0Rvd25saW5lc1tmb3VuZEluZGV4XSk7XG4gICAgICAgICAgbmV3RG93bmxpbmVzLnNwbGljZShmb3VuZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudERvd25saW5lcyA9IGludGVyc2VjdERvd25saW5lcy5jb25jYXQobmV3RG93bmxpbmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RG93bmxpbmVzO1xuICB9XG59XG4iXX0=