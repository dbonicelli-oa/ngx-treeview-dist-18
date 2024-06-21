import { EventEmitter, TemplateRef } from '@angular/core';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewConfig } from '../../models/treeview-config';
import { TreeviewItemTemplateContext } from '../../models/treeview-item-template-context';
import * as i0 from "@angular/core";
export declare class TreeviewItemComponent {
    private defaultConfig;
    config: TreeviewConfig;
    template: TemplateRef<TreeviewItemTemplateContext>;
    item: TreeviewItem;
    checkedChange: EventEmitter<boolean>;
    constructor(defaultConfig: TreeviewConfig);
    onCollapseExpand: () => void;
    onCheckedChange: () => void;
    onChildCheckedChange(child: TreeviewItem, checked: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeviewItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeviewItemComponent, "ngx-treeview-item", never, { "config": { "alias": "config"; "required": false; }; "template": { "alias": "template"; "required": false; }; "item": { "alias": "item"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, never, false, never>;
}
