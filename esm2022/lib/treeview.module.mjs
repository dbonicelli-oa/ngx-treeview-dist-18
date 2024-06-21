import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';
import { DropdownMenuDirective } from './directives/dropdown-menu.directive';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { DropdownTreeviewComponent } from './components/dropdown-treeview/dropdown-treeview.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { TreeviewItemComponent } from './components/treeview-item/treeview-item.component';
import { TreeviewPipe } from './pipes/treeview.pipe';
import { TreeviewI18n, DefaultTreeviewI18n } from './models/treeview-i18n';
import { TreeviewConfig } from './models/treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from './helpers/treeview-event-parser';
import * as i0 from "@angular/core";
export class TreeviewModule {
    static forRoot() {
        return {
            ngModule: TreeviewModule,
            providers: [
                TreeviewConfig,
                { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
                { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
            ]
        };
    }
    static ɵfac = function TreeviewModule_Factory(t) { return new (t || TreeviewModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TreeviewModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [FormsModule,
            CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    CommonModule
                ],
                declarations: [
                    TreeviewComponent,
                    TreeviewItemComponent,
                    TreeviewPipe,
                    DropdownDirective,
                    DropdownMenuDirective,
                    DropdownToggleDirective,
                    DropdownTreeviewComponent
                ], exports: [
                    TreeviewComponent,
                    TreeviewPipe,
                    DropdownTreeviewComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TreeviewModule, { declarations: [TreeviewComponent,
        TreeviewItemComponent,
        TreeviewPipe,
        DropdownDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        DropdownTreeviewComponent], imports: [FormsModule,
        CommonModule], exports: [TreeviewComponent,
        TreeviewPipe,
        DropdownTreeviewComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvdHJlZXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBcUJsRyxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsY0FBYztnQkFDZCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO2dCQUN4RCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUU7YUFDdkU7U0FDRixDQUFDO0lBQ0osQ0FBQzt3RUFWVSxjQUFjOzREQUFkLGNBQWM7Z0VBakJ2QixXQUFXO1lBQ1gsWUFBWTs7aUZBZ0JILGNBQWM7Y0FuQjFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2Qix5QkFBeUI7aUJBQzFCLEVBQUUsT0FBTyxFQUFFO29CQUNWLGlCQUFpQjtvQkFDakIsWUFBWTtvQkFDWix5QkFBeUI7aUJBQzFCO2FBQ0Y7O3dGQUNZLGNBQWMsbUJBYnZCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLHlCQUF5QixhQVZ6QixXQUFXO1FBQ1gsWUFBWSxhQVdaLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1oseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcGRvd24tbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wZG93blRyZWV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duLXRyZWV2aWV3L2Ryb3Bkb3duLXRyZWV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVldmlld0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVldmlldy90cmVldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWV2aWV3LWl0ZW0vdHJlZXZpZXctaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZXZpZXdQaXBlIH0gZnJvbSAnLi9waXBlcy90cmVldmlldy5waXBlJztcbmltcG9ydCB7IFRyZWV2aWV3STE4biwgRGVmYXVsdFRyZWV2aWV3STE4biB9IGZyb20gJy4vbW9kZWxzL3RyZWV2aWV3LWkxOG4nO1xuaW1wb3J0IHsgVHJlZXZpZXdDb25maWcgfSBmcm9tICcuL21vZGVscy90cmVldmlldy1jb25maWcnO1xuaW1wb3J0IHsgVHJlZXZpZXdFdmVudFBhcnNlciwgRGVmYXVsdFRyZWV2aWV3RXZlbnRQYXJzZXIgfSBmcm9tICcuL2hlbHBlcnMvdHJlZXZpZXctZXZlbnQtcGFyc2VyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUcmVldmlld0NvbXBvbmVudCxcbiAgICBUcmVldmlld0l0ZW1Db21wb25lbnQsXG4gICAgVHJlZXZpZXdQaXBlLFxuICAgIERyb3Bkb3duRGlyZWN0aXZlLFxuICAgIERyb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgICBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBEcm9wZG93blRyZWV2aWV3Q29tcG9uZW50XG4gIF0sIGV4cG9ydHM6IFtcbiAgICBUcmVldmlld0NvbXBvbmVudCxcbiAgICBUcmVldmlld1BpcGUsXG4gICAgRHJvcGRvd25UcmVldmlld0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWV2aWV3TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUcmVldmlld01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHJlZXZpZXdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVHJlZXZpZXdDb25maWcsXG4gICAgICAgIHsgcHJvdmlkZTogVHJlZXZpZXdJMThuLCB1c2VDbGFzczogRGVmYXVsdFRyZWV2aWV3STE4biB9LFxuICAgICAgICB7IHByb3ZpZGU6IFRyZWV2aWV3RXZlbnRQYXJzZXIsIHVzZUNsYXNzOiBEZWZhdWx0VHJlZXZpZXdFdmVudFBhcnNlciB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19