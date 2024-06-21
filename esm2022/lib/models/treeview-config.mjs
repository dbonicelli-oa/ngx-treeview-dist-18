import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeviewConfig {
    hasAllCheckBox = true;
    hasFilter = false;
    hasCollapseExpand = false;
    decoupleChildFromParent = false;
    filterHidden = false;
    maxHeight = 500;
    get hasDivider() {
        return this.hasFilter || this.hasAllCheckBox || this.hasCollapseExpand;
    }
    static create(fields) {
        const config = new TreeviewConfig();
        Object.assign(config, fields);
        return config;
    }
    static ɵfac = function TreeviewConfig_Factory(t) { return new (t || TreeviewConfig)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TreeviewConfig, factory: TreeviewConfig.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewConfig, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvbW9kZWxzL3RyZWV2aWV3LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sY0FBYztJQUN6QixjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzFCLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUNoQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFFaEIsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ3pFLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BT3BCO1FBQ0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO3dFQXZCVSxjQUFjO2dFQUFkLGNBQWMsV0FBZCxjQUFjOztpRkFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVldmlld0NvbmZpZyB7XG4gIGhhc0FsbENoZWNrQm94ID0gdHJ1ZTtcbiAgaGFzRmlsdGVyID0gZmFsc2U7XG4gIGhhc0NvbGxhcHNlRXhwYW5kID0gZmFsc2U7XG4gIGRlY291cGxlQ2hpbGRGcm9tUGFyZW50ID0gZmFsc2U7XG4gIGZpbHRlckhpZGRlbiA9IGZhbHNlO1xuICBtYXhIZWlnaHQgPSA1MDA7XG5cbiAgZ2V0IGhhc0RpdmlkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzRmlsdGVyIHx8IHRoaXMuaGFzQWxsQ2hlY2tCb3ggfHwgdGhpcy5oYXNDb2xsYXBzZUV4cGFuZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGZpZWxkcz86IHtcbiAgICBoYXNBbGxDaGVja0JveD86IGJvb2xlYW4sXG4gICAgaGFzRmlsdGVyPzogYm9vbGVhbixcbiAgICBoYXNDb2xsYXBzZUV4cGFuZD86IGJvb2xlYW4sXG4gICAgZGVjb3VwbGVDaGlsZEZyb21QYXJlbnQ/OiBib29sZWFuXG4gICAgZmlsdGVySGlkZGVuPzogYm9vbGVhblxuICAgIG1heEhlaWdodD86IG51bWJlcixcbiAgfSk6IFRyZWV2aWV3Q29uZmlnIHtcbiAgICBjb25zdCBjb25maWcgPSBuZXcgVHJlZXZpZXdDb25maWcoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgZmllbGRzKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG4iXX0=