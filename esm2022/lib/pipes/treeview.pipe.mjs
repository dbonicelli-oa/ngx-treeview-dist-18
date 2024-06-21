import { Pipe } from '@angular/core';
import { isNil } from 'lodash';
import { TreeviewItem } from '../models/treeview-item';
import * as i0 from "@angular/core";
export class TreeviewPipe {
    transform(objects, textField) {
        if (isNil(objects)) {
            return undefined;
        }
        return objects.map(object => new TreeviewItem({ text: object[textField], value: object }));
    }
    static ɵfac = function TreeviewPipe_Factory(t) { return new (t || TreeviewPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ngxTreeview", type: TreeviewPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewPipe, [{
        type: Pipe,
        args: [{
                name: 'ngxTreeview'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL3BpcGVzL3RyZWV2aWV3LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxPQUFjLEVBQUUsU0FBaUI7UUFDekMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNuQixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztzRUFQVSxZQUFZOzhFQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FIeEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0nO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICduZ3hUcmVldmlldydcbn0pXG5leHBvcnQgY2xhc3MgVHJlZXZpZXdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShvYmplY3RzOiBhbnlbXSwgdGV4dEZpZWxkOiBzdHJpbmcpOiBUcmVldmlld0l0ZW1bXSB7XG4gICAgaWYgKGlzTmlsKG9iamVjdHMpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RzLm1hcChvYmplY3QgPT4gbmV3IFRyZWV2aWV3SXRlbSh7IHRleHQ6IG9iamVjdFt0ZXh0RmllbGRdLCB2YWx1ZTogb2JqZWN0IH0pKTtcbiAgfVxufVxuIl19