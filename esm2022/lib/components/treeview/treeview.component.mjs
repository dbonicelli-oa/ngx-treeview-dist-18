import { Component, Input, Output, EventEmitter } from '@angular/core';
import { isNil, includes } from 'lodash';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewHelper } from '../../helpers/treeview-helper';
import * as i0 from "@angular/core";
import * as i1 from "../../models/treeview-i18n";
import * as i2 from "../../models/treeview-config";
import * as i3 from "../../helpers/treeview-event-parser";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "../treeview-item/treeview-item.component";
function TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 15);
    i0.ɵɵelement(1, "path", 16);
    i0.ɵɵelementEnd();
} }
function TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 17);
    i0.ɵɵelement(1, "path", 18);
    i0.ɵɵelementEnd();
} }
function TreeviewComponent_ng_template_0_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 12);
    i0.ɵɵlistener("click", function TreeviewComponent_ng_template_0_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r2); const onCollapseExpand_r3 = i0.ɵɵnextContext().onCollapseExpand; return i0.ɵɵresetView(onCollapseExpand_r3()); });
    i0.ɵɵtemplate(1, TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template, 2, 0, "svg", 13)(2, TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template, 2, 0, "svg", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().item;
    i0.ɵɵproperty("ngSwitch", item_r4.collapsed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", false);
} }
function TreeviewComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, TreeviewComponent_ng_template_0_i_1_Template, 3, 3, "i", 8);
    i0.ɵɵelementStart(2, "div", 9)(3, "input", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener($event) { const item_r4 = i0.ɵɵrestoreView(_r1).item; i0.ɵɵtwoWayBindingSet(item_r4.checked, $event) || (item_r4.checked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener() { const onCheckedChange_r5 = i0.ɵɵrestoreView(_r1).onCheckedChange; return i0.ɵɵresetView(onCheckedChange_r5()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 11);
    i0.ɵɵlistener("click", function TreeviewComponent_ng_template_0_Template_label_click_4_listener() { const ctx_r5 = i0.ɵɵrestoreView(_r1); const item_r4 = ctx_r5.item; const onCheckedChange_r5 = ctx_r5.onCheckedChange; item_r4.checked = !item_r4.checked; return i0.ɵɵresetView(onCheckedChange_r5()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = ctx.item;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.children);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", item_r4.checked);
    i0.ɵɵproperty("disabled", item_r4.disabled)("indeterminate", item_r4.indeterminate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r4.text, " ");
} }
function TreeviewComponent_ng_template_2_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function TreeviewComponent_ng_template_2_div_0_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r7 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r7.showHidden, $event) || (ctx_r7.showHidden = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_2_div_0_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const onFilterShowHiddenChange_r11 = i0.ɵɵnextContext(2).onFilterShowHiddenChange; return i0.ɵɵresetView(onFilterShowHiddenChange_r11($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 27);
    i0.ɵɵtext(3, "Show Hidden");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.showHidden);
} }
function TreeviewComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r7 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r7.filterText, $event) || (ctx_r7.filterText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const onFilterTextChange_r9 = i0.ɵɵnextContext().onFilterTextChange; return i0.ɵɵresetView(onFilterTextChange_r9($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(3, TreeviewComponent_ng_template_2_div_0_div_3_Template, 4, 1, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r12 = i0.ɵɵnextContext().config;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", ctx_r7.i18n.getFilterPlaceholder());
    i0.ɵɵtwoWayProperty("ngModel", ctx_r7.filterText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", config_r12.filterHidden);
} }
function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "input", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13); const item_r14 = i0.ɵɵnextContext(3).item; i0.ɵɵtwoWayBindingSet(item_r14.checked, $event) || (item_r14.checked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r13); const onCheckedChange_r15 = i0.ɵɵnextContext(3).onCheckedChange; return i0.ɵɵresetView(onCheckedChange_r15()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 11);
    i0.ɵɵlistener("click", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_label_click_2_listener() { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(3); const item_r14 = ctx_r15.item; const onCheckedChange_r15 = ctx_r15.onCheckedChange; item_r14.checked = !item_r14.checked; return i0.ɵɵresetView(onCheckedChange_r15()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext(3).item;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", item_r14.checked);
    i0.ɵɵproperty("indeterminate", item_r14.indeterminate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.i18n.getAllCheckboxText(), " ");
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 39);
    i0.ɵɵelement(1, "path", 40)(2, "path", 41)(3, "path", 42);
    i0.ɵɵelementEnd();
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 43);
    i0.ɵɵelement(1, "path", 44)(2, "path", 45)(3, "path", 46);
    i0.ɵɵelementEnd();
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 35);
    i0.ɵɵlistener("click", function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r17); const onCollapseExpand_r18 = i0.ɵɵnextContext(3).onCollapseExpand; return i0.ɵɵresetView(onCollapseExpand_r18()); });
    i0.ɵɵelementStart(1, "i", 36);
    i0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template, 4, 0, "svg", 37)(3, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template, 4, 0, "svg", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext(3).item;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r7.i18n.getTooltipCollapseExpandText(item_r14.collapsed))("ngSwitch", item_r14.collapsed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", false);
} }
function TreeviewComponent_ng_template_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 22);
    i0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template, 4, 3, "div", 31)(3, TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template, 4, 4, "label", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const config_r12 = i0.ɵɵnextContext(2).config;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", config_r12.hasAllCheckBox);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", config_r12.hasCollapseExpand);
} }
function TreeviewComponent_ng_template_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 47);
} }
function TreeviewComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TreeviewComponent_ng_template_2_div_1_div_1_Template, 4, 2, "div", 28)(2, TreeviewComponent_ng_template_2_div_1_div_2_Template, 1, 0, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r12 = i0.ɵɵnextContext().config;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", config_r12.hasAllCheckBox || config_r12.hasCollapseExpand);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", config_r12.hasDivider);
} }
function TreeviewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeviewComponent_ng_template_2_div_0_Template, 4, 3, "div", 19)(1, TreeviewComponent_ng_template_2_div_1_Template, 3, 2, "div", 20);
} if (rf & 2) {
    const config_r12 = ctx.config;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", config_r12.hasFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.hasFilterItems);
} }
function TreeviewComponent_ng_template_5_Template(rf, ctx) { }
function TreeviewComponent_div_7_ngx_treeview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-treeview-item", 50);
    i0.ɵɵlistener("checkedChange", function TreeviewComponent_div_7_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { const item_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.onItemCheckedChange(item_r20, $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    const defaultItemTemplate_r21 = i0.ɵɵreference(1);
    i0.ɵɵproperty("config", ctx_r7.config)("item", item_r20)("template", ctx_r7.itemTemplate || defaultItemTemplate_r21);
} }
function TreeviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, TreeviewComponent_div_7_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-height", ctx_r7.maxHeight, "px");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r7.filterItems);
} }
function TreeviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r7.i18n.getFilterNoItemsFoundText(), " ");
} }
class FilterTreeviewItem extends TreeviewItem {
    refItem;
    constructor(item) {
        super({
            text: item.text,
            value: item.value,
            disabled: item.disabled,
            checked: item.checked,
            hidden: item.hidden,
            collapsed: item.collapsed,
            children: item.children
        });
        this.refItem = item;
    }
    updateRefChecked() {
        this.children.forEach(child => {
            if (child instanceof FilterTreeviewItem) {
                child.updateRefChecked();
            }
        });
        let refChecked = this.checked;
        if (refChecked) {
            for (const refChild of this.refItem.children) {
                if (!refChild.checked) {
                    refChecked = false;
                    break;
                }
            }
        }
        this.refItem.checked = refChecked;
    }
}
export class TreeviewComponent {
    i18n;
    defaultConfig;
    eventParser;
    headerTemplate;
    itemTemplate;
    items;
    config;
    selectedChange = new EventEmitter();
    filterChange = new EventEmitter();
    headerTemplateContext;
    allItem;
    filterText = '';
    showHidden = false;
    filterItems;
    selection;
    constructor(i18n, defaultConfig, eventParser) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.eventParser = eventParser;
        this.config = this.defaultConfig;
        this.allItem = new TreeviewItem({ text: 'All', value: undefined });
    }
    get hasFilterItems() {
        return !isNil(this.filterItems) && this.filterItems.length > 0;
    }
    get maxHeight() {
        return `${this.config.maxHeight}`;
    }
    ngOnInit() {
        this.createHeaderTemplateContext();
        this.generateSelection();
    }
    ngOnChanges(changes) {
        const itemsSimpleChange = changes.items;
        if (!isNil(itemsSimpleChange) && !isNil(this.items)) {
            this.updateFilterItems();
            this.updateCollapsedOfAll();
            this.raiseSelectedChange();
        }
    }
    onAllCollapseExpand() {
        this.allItem.collapsed = !this.allItem.collapsed;
        this.filterItems.forEach(item => item.setCollapsedRecursive(this.allItem.collapsed));
    }
    onFilterTextChange(text) {
        this.filterText = text;
        this.filterChange.emit(text);
        this.updateFilterItems();
    }
    onFilterShowHiddenChange(showHidden) {
        this.showHidden = showHidden;
        this.filterChange.emit(`${showHidden}`);
        this.filterText = '';
        this.updateFilterItems();
    }
    onAllCheckedChange() {
        const checked = this.allItem.checked;
        this.filterItems.forEach(item => {
            item.setCheckedRecursive(checked);
            if (item instanceof FilterTreeviewItem) {
                item.updateRefChecked();
            }
        });
        this.raiseSelectedChange();
    }
    onItemCheckedChange(item, checked) {
        if (item instanceof FilterTreeviewItem) {
            item.updateRefChecked();
        }
        this.updateCheckedOfAll();
        this.raiseSelectedChange();
    }
    raiseSelectedChange() {
        this.generateSelection();
        const values = this.eventParser.getSelectedChange(this);
        setTimeout(() => {
            this.selectedChange.emit(values);
        });
    }
    createHeaderTemplateContext() {
        this.headerTemplateContext = {
            config: this.config,
            item: this.allItem,
            onCheckedChange: () => this.onAllCheckedChange(),
            onCollapseExpand: () => this.onAllCollapseExpand(),
            onFilterTextChange: (text) => this.onFilterTextChange(text),
            onFilterShowHiddenChange: (showHidden) => this.onFilterShowHiddenChange(showHidden)
        };
    }
    generateSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (!isNil(this.items)) {
            const selection = TreeviewHelper.concatSelection(this.items, checkedItems, uncheckedItems);
            checkedItems = selection.checked;
            uncheckedItems = selection.unchecked;
        }
        this.selection = {
            checkedItems,
            uncheckedItems
        };
    }
    updateFilterItems() {
        if (this.filterText !== '') {
            const filterItems = [];
            const filterText = this.filterText.toLowerCase();
            this.items.forEach(item => {
                const newItem = this.filterItem(item, filterText);
                if (!isNil(newItem)) {
                    if (this.config.filterHidden) {
                        const filteredHiddenItem = this.filterItemHidden(newItem, this.showHidden);
                        if (!isNil(filteredHiddenItem)) {
                            filterItems.push(filteredHiddenItem);
                        }
                    }
                    else {
                        filterItems.push(newItem);
                    }
                }
            });
            this.filterItems = filterItems;
        }
        else {
            const filterItems = [];
            this.items.forEach(item => {
                const newItem = this.filterItemHidden(item, this.showHidden);
                if (!isNil(newItem)) {
                    filterItems.push(newItem);
                }
            });
            this.filterItems = filterItems;
        }
        this.updateCheckedOfAll();
    }
    filterItemHidden(item, showHidden) {
        if (!showHidden && this.config.filterHidden) {
            if (item.hidden) {
                return undefined;
            }
            else {
                if (!isNil(item.children)) {
                    const children = [];
                    item.children.forEach(child => {
                        const newChild = this.filterItemHidden(child, showHidden);
                        if (!isNil(newChild)) {
                            children.push(newChild);
                        }
                    });
                    if (children.length > 0) {
                        const newItem = new FilterTreeviewItem(item);
                        newItem.collapsed = false;
                        newItem.children = children;
                        return newItem;
                    }
                    else {
                        const newItem = new FilterTreeviewItem(new TreeviewItem({
                            text: item.text,
                            value: item.value,
                            disabled: item.disabled,
                            checked: item.checked,
                            hidden: item.hidden,
                            collapsed: item.collapsed,
                            children: []
                        }));
                        newItem.collapsed = false;
                        return newItem;
                    }
                }
            }
        }
        else {
            return item;
        }
        return item;
    }
    filterItem(item, filterText) {
        const isMatch = includes(item.text.toLowerCase(), filterText);
        if (isMatch && (this.showHidden || (!this.showHidden && !item.hidden))) {
            return item;
        }
        else {
            if (!isNil(item.children) && ((!this.showHidden && !item.hidden) || this.showHidden)) {
                const children = [];
                item.children.forEach(child => {
                    const newChild = this.filterItem(child, filterText);
                    if (!isNil(newChild)) {
                        children.push(newChild);
                    }
                });
                if (children.length > 0) {
                    const newItem = new FilterTreeviewItem(item);
                    newItem.collapsed = false;
                    newItem.children = children;
                    return newItem;
                }
            }
        }
        return undefined;
    }
    updateCheckedOfAll() {
        let itemChecked = null;
        for (const filterItem of this.filterItems) {
            if (itemChecked === null) {
                itemChecked = filterItem.checked;
            }
            else if (itemChecked !== filterItem.checked) {
                itemChecked = undefined;
                break;
            }
        }
        if (itemChecked === null) {
            itemChecked = false;
        }
        this.allItem.checked = itemChecked;
    }
    updateCollapsedOfAll() {
        let hasItemExpanded = false;
        for (const filterItem of this.filterItems) {
            if (!filterItem.collapsed) {
                hasItemExpanded = true;
                break;
            }
        }
        this.allItem.collapsed = !hasItemExpanded;
    }
    static ɵfac = function TreeviewComponent_Factory(t) { return new (t || TreeviewComponent)(i0.ɵɵdirectiveInject(i1.TreeviewI18n), i0.ɵɵdirectiveInject(i2.TreeviewConfig), i0.ɵɵdirectiveInject(i3.TreeviewEventParser)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeviewComponent, selectors: [["ngx-treeview"]], inputs: { headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items", config: "config" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 5, consts: [["defaultItemTemplate", ""], ["defaultHeaderTemplate", ""], [1, "treeview-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["class", "treeview-container", 3, "max-height", 4, "ngSwitchCase"], ["class", "treeview-text", 4, "ngSwitchCase"], [1, "form-inline", "row-item"], ["aria-hidden", "true", 3, "ngSwitch", "click", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel", "disabled", "indeterminate"], [1, "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "click", "ngSwitch"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-right-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-down-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-down-fill"], ["d", "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"], ["class", "row row-filter", 4, "ngIf"], [4, "ngIf"], [1, "row", "row-filter"], [1, "col-12"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "col-12", "style", "margin-top: 10px", 4, "ngIf"], [1, "col-12", 2, "margin-top", "10px"], ["id", "filterToggle", "type", "checkbox", 1, "form-check-input", 2, "margin-right", "7px", 3, "ngModelChange", "ngModel"], ["for", "filterToggle", 1, "form-check-label"], ["class", "row row-all", 4, "ngIf"], ["class", "dropdown-divider", 4, "ngIf"], [1, "row", "row-all"], ["class", "form-check form-check-inline", 4, "ngIf"], ["class", "float-right form-check-label", 3, "click", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel", "indeterminate"], [1, "float-right", "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "title", "ngSwitch"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-expand", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-contract", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-expand"], ["fill-rule", "evenodd", "d", "M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-contract"], ["fill-rule", "evenodd", "d", "M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z"], [1, "dropdown-divider"], [1, "treeview-container"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "checkedChange", "config", "item", "template"], [1, "treeview-text"]], template: function TreeviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeviewComponent_ng_template_0_Template, 6, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, TreeviewComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵtemplate(5, TreeviewComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, TreeviewComponent_div_7_Template, 2, 3, "div", 5)(8, TreeviewComponent_div_8_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const defaultHeaderTemplate_r22 = i0.ɵɵreference(3);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate || defaultHeaderTemplate_r22)("ngTemplateOutletContext", ctx.headerTemplateContext);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitch", ctx.hasFilterItems);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", false);
        } }, dependencies: [i4.DefaultValueAccessor, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NgForOf, i5.NgIf, i5.NgTemplateOutlet, i5.NgSwitch, i5.NgSwitchCase, i6.TreeviewItemComponent], styles: ["[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-filter[_ngcontent-%COMP%]{margin-bottom:.5rem}[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-all[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]{margin-bottom:.3rem;flex-wrap:nowrap}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer;margin-right:.3rem}.treeview-container[_ngcontent-%COMP%]{overflow-y:auto;padding-right:.3rem}.treeview-text[_ngcontent-%COMP%]{padding:.3rem 0;white-space:nowrap}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewComponent, [{
        type: Component,
        args: [{ selector: 'ngx-treeview', template: "<ng-template #defaultItemTemplate let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\n  let-onCheckedChange=\"onCheckedChange\">\n  <div class=\"form-inline row-item\">\n    <i *ngIf=\"item.children\" (click)=\"onCollapseExpand()\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\n      <svg *ngSwitchCase=\"true\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-right-fill\"\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z\" />\n      </svg>\n      <svg *ngSwitchCase=\"false\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-down-fill\"\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\" />\n      </svg>\n    </i>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\n        [disabled]=\"item.disabled\" [indeterminate]=\"item.indeterminate\" />\n      <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\n        {{item.text}}\n      </label>\n    </div>\n  </div>\n</ng-template>\n<ng-template #defaultHeaderTemplate let-config=\"config\" let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\n  let-onCheckedChange=\"onCheckedChange\" let-onFilterTextChange=\"onFilterTextChange\" let-onFilterShowHiddenChange=\"onFilterShowHiddenChange\">\n  <div *ngIf=\"config.hasFilter\" class=\"row row-filter\">\n    <div class=\"col-12\">\n      <input class=\"form-control\" type=\"text\" [placeholder]=\"i18n.getFilterPlaceholder()\" [(ngModel)]=\"filterText\"\n        (ngModelChange)=\"onFilterTextChange($event)\" />\n    </div>\n    <div class=\"col-12\" style=\"margin-top: 10px\" *ngIf=\"config.filterHidden\">\n      <input class=\"form-check-input\" id=\"filterToggle\" style=\"margin-right: 7px;\" type=\"checkbox\" [(ngModel)]=\"showHidden\"\n             (ngModelChange)=\"onFilterShowHiddenChange($event)\" />\n      <label class=\"form-check-label\" for=\"filterToggle\">Show Hidden</label>\n    </div>\n  </div>\n  <div *ngIf=\"hasFilterItems\">\n    <div *ngIf=\"config.hasAllCheckBox || config.hasCollapseExpand\" class=\"row row-all\">\n      <div class=\"col-12\">\n        <div class=\"form-check form-check-inline\" *ngIf=\"config.hasAllCheckBox\">\n          <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\n            [indeterminate]=\"item.indeterminate\" />\n          <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\n            {{i18n.getAllCheckboxText()}}\n          </label>\n        </div>\n        <label *ngIf=\"config.hasCollapseExpand\" class=\"float-right form-check-label\" (click)=\"onCollapseExpand()\">\n          <i [title]=\"i18n.getTooltipCollapseExpandText(item.collapsed)\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\n            <svg *ngSwitchCase=\"true\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-expand\"\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\"\n                d=\"M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z\" />\n            </svg>\n            <svg *ngSwitchCase=\"false\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-contract\"\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\"\n                d=\"M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z\" />\n            </svg>\n          </i>\n        </label>\n      </div>\n    </div>\n    <div *ngIf=\"config.hasDivider\" class=\"dropdown-divider\"></div>\n  </div>\n</ng-template>\n<div class=\"treeview-header\">\n  <ng-template [ngTemplateOutlet]=\"headerTemplate || defaultHeaderTemplate\"\n    [ngTemplateOutletContext]=\"headerTemplateContext\">\n  </ng-template>\n</div>\n<div [ngSwitch]=\"hasFilterItems\">\n  <div *ngSwitchCase=\"true\" class=\"treeview-container\" [style.max-height.px]=\"maxHeight\">\n    <ngx-treeview-item *ngFor=\"let item of filterItems\" [config]=\"config\" [item]=\"item\"\n      [template]=\"itemTemplate || defaultItemTemplate\" (checkedChange)=\"onItemCheckedChange(item, $event)\">\n    </ngx-treeview-item>\n  </div>\n  <div *ngSwitchCase=\"false\" class=\"treeview-text\">\n    {{i18n.getFilterNoItemsFoundText()}}\n  </div>\n</div>\n", styles: [":host .treeview-header .row-filter{margin-bottom:.5rem}:host .treeview-header .row-all .bi{cursor:pointer}:host .treeview-container .row-item{margin-bottom:.3rem;flex-wrap:nowrap}:host .treeview-container .row-item .bi{cursor:pointer;margin-right:.3rem}.treeview-container{overflow-y:auto;padding-right:.3rem}.treeview-text{padding:.3rem 0;white-space:nowrap}\n"] }]
    }], () => [{ type: i1.TreeviewI18n }, { type: i2.TreeviewConfig }, { type: i3.TreeviewEventParser }], { headerTemplate: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeviewComponent, { className: "TreeviewComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvY29tcG9uZW50cy90cmVldmlldy90cmVldmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sNEJBQTRCLENBQUM7QUFJN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7O0lDSHpELCtCQUN5RDtJQUN2RCwyQkFDMEg7SUFDNUgsaUJBQU07Ozs7SUFDTiwrQkFDeUQ7SUFDdkQsMkJBQ3VIO0lBQ3pILGlCQUFNOzs7O0lBVlIsNkJBQXFHO0lBQTVFLGtOQUFTLHFCQUFrQixLQUFDO0lBTW5ELEFBTEEsMEZBQ3lELDZFQUtBO0lBSTNELGlCQUFJOzs7SUFYcUUsNENBQTJCO0lBQzVGLGNBQWtCO0lBQWxCLG1DQUFrQjtJQUtsQixjQUFtQjtJQUFuQixvQ0FBbUI7Ozs7SUFQN0IsOEJBQWtDO0lBQ2hDLDRFQUFxRztJQWFuRyxBQURGLDhCQUF3QixnQkFFOEM7SUFEcEIsMlJBQTBCO0lBQUMsNE1BQWlCLG9CQUFpQixLQUFDO0lBQTlHLGlCQUNvRTtJQUNwRSxpQ0FBMEY7SUFBMUQsb1JBQXVDLG9CQUFpQixLQUFDO0lBQ3ZGLFlBQ0Y7SUFFSixBQURFLEFBREUsaUJBQVEsRUFDSixFQUNG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QVcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN6QixXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDNUIsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDMUIsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDdkIsTUFBTTtZQUNSLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDNUMsQ0FBQzsyRUFwUFUsaUJBQWlCOzZEQUFqQixpQkFBaUI7WUMxQjlCLEFBeEJBLG1IQUN3QyxzR0F3Qm9HO1lBaUQ1SSw4QkFBNkI7WUFDM0Isa0ZBQ29EO1lBRXRELGlCQUFNO1lBQ04sOEJBQWlDO1lBTS9CLEFBTEEsa0VBQXVGLHFEQUt0QztZQUduRCxpQkFBTTs7O1lBYlMsZUFBNEQ7WUFDdkUsQUFEVyxrRkFBNEQsc0RBQ3RCO1lBR2hELGNBQTJCO1lBQTNCLDZDQUEyQjtZQUN4QixjQUFrQjtZQUFsQixtQ0FBa0I7WUFLbEIsY0FBbUI7WUFBbkIsb0NBQW1COzs7aUZEbkNkLGlCQUFpQjtjQUw3QixTQUFTOzJCQUNFLGNBQWM7NEdBS2YsY0FBYztrQkFBdEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTs7a0ZBTkksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOaWwsIGluY2x1ZGVzIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFRyZWV2aWV3STE4biB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pMThuJztcbmltcG9ydCB7IFRyZWV2aWV3SXRlbSwgVHJlZXZpZXdTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaXRlbSc7XG5pbXBvcnQgeyBUcmVldmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1jb25maWcnO1xuaW1wb3J0IHsgVHJlZXZpZXdIZWFkZXJUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaGVhZGVyLXRlbXBsYXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0tdGVtcGxhdGUtY29udGV4dCc7XG5pbXBvcnQgeyBUcmVldmlld0hlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdHJlZXZpZXctaGVscGVyJztcbmltcG9ydCB7IFRyZWV2aWV3RXZlbnRQYXJzZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3RyZWV2aWV3LWV2ZW50LXBhcnNlcic7XG5cbmNsYXNzIEZpbHRlclRyZWV2aWV3SXRlbSBleHRlbmRzIFRyZWV2aWV3SXRlbSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVmSXRlbTogVHJlZXZpZXdJdGVtO1xuICBjb25zdHJ1Y3RvcihpdGVtOiBUcmVldmlld0l0ZW0pIHtcbiAgICBzdXBlcih7XG4gICAgICB0ZXh0OiBpdGVtLnRleHQsXG4gICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkLFxuICAgICAgY2hlY2tlZDogaXRlbS5jaGVja2VkLFxuICAgICAgaGlkZGVuOiBpdGVtLmhpZGRlbixcbiAgICAgIGNvbGxhcHNlZDogaXRlbS5jb2xsYXBzZWQsXG4gICAgICBjaGlsZHJlbjogaXRlbS5jaGlsZHJlblxuICAgIH0pO1xuICAgIHRoaXMucmVmSXRlbSA9IGl0ZW07XG4gIH1cblxuICB1cGRhdGVSZWZDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBGaWx0ZXJUcmVldmlld0l0ZW0pIHtcbiAgICAgICAgY2hpbGQudXBkYXRlUmVmQ2hlY2tlZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHJlZkNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG4gICAgaWYgKHJlZkNoZWNrZWQpIHtcbiAgICAgIGZvciAoY29uc3QgcmVmQ2hpbGQgb2YgdGhpcy5yZWZJdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmICghcmVmQ2hpbGQuY2hlY2tlZCkge1xuICAgICAgICAgIHJlZkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlZkl0ZW0uY2hlY2tlZCA9IHJlZkNoZWNrZWQ7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRyZWV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPFRyZWV2aWV3SGVhZGVyVGVtcGxhdGVDb250ZXh0PjtcbiAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQ+O1xuICBASW5wdXQoKSBpdGVtczogVHJlZXZpZXdJdGVtW107XG4gIEBJbnB1dCgpIGNvbmZpZzogVHJlZXZpZXdDb25maWc7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgaGVhZGVyVGVtcGxhdGVDb250ZXh0OiBUcmVldmlld0hlYWRlclRlbXBsYXRlQ29udGV4dDtcbiAgYWxsSXRlbTogVHJlZXZpZXdJdGVtO1xuICBmaWx0ZXJUZXh0ID0gJyc7XG4gIHNob3dIaWRkZW4gPSBmYWxzZTtcbiAgZmlsdGVySXRlbXM6IFRyZWV2aWV3SXRlbVtdO1xuICBzZWxlY3Rpb246IFRyZWV2aWV3U2VsZWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpMThuOiBUcmVldmlld0kxOG4sXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBUcmVldmlld0NvbmZpZyxcbiAgICBwcml2YXRlIGV2ZW50UGFyc2VyOiBUcmVldmlld0V2ZW50UGFyc2VyXG4gICkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICAgIHRoaXMuYWxsSXRlbSA9IG5ldyBUcmVldmlld0l0ZW0oeyB0ZXh0OiAnQWxsJywgdmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIGdldCBoYXNGaWx0ZXJJdGVtcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzTmlsKHRoaXMuZmlsdGVySXRlbXMpICYmIHRoaXMuZmlsdGVySXRlbXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcubWF4SGVpZ2h0fWA7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUhlYWRlclRlbXBsYXRlQ29udGV4dCgpO1xuICAgIHRoaXMuZ2VuZXJhdGVTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtc1NpbXBsZUNoYW5nZSA9IGNoYW5nZXMuaXRlbXM7XG4gICAgaWYgKCFpc05pbChpdGVtc1NpbXBsZUNoYW5nZSkgJiYgIWlzTmlsKHRoaXMuaXRlbXMpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlckl0ZW1zKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbGxhcHNlZE9mQWxsKCk7XG4gICAgICB0aGlzLnJhaXNlU2VsZWN0ZWRDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBvbkFsbENvbGxhcHNlRXhwYW5kKCk6IHZvaWQge1xuICAgIHRoaXMuYWxsSXRlbS5jb2xsYXBzZWQgPSAhdGhpcy5hbGxJdGVtLmNvbGxhcHNlZDtcbiAgICB0aGlzLmZpbHRlckl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnNldENvbGxhcHNlZFJlY3Vyc2l2ZSh0aGlzLmFsbEl0ZW0uY29sbGFwc2VkKSk7XG4gIH1cblxuICBvbkZpbHRlclRleHRDaGFuZ2UodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJUZXh0ID0gdGV4dDtcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHRleHQpO1xuICAgIHRoaXMudXBkYXRlRmlsdGVySXRlbXMoKTtcbiAgfVxuXG4gIG9uRmlsdGVyU2hvd0hpZGRlbkNoYW5nZShzaG93SGlkZGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaG93SGlkZGVuID0gc2hvd0hpZGRlbjtcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGAke3Nob3dIaWRkZW59YCk7XG4gICAgdGhpcy5maWx0ZXJUZXh0ID0gJyc7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJJdGVtcygpO1xuICB9XG5cbiAgb25BbGxDaGVja2VkQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmFsbEl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLmZpbHRlckl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLnNldENoZWNrZWRSZWN1cnNpdmUoY2hlY2tlZCk7XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEZpbHRlclRyZWV2aWV3SXRlbSkge1xuICAgICAgICBpdGVtLnVwZGF0ZVJlZkNoZWNrZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmFpc2VTZWxlY3RlZENoYW5nZSgpO1xuICB9XG5cbiAgb25JdGVtQ2hlY2tlZENoYW5nZShpdGVtOiBUcmVldmlld0l0ZW0sIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEZpbHRlclRyZWV2aWV3SXRlbSkge1xuICAgICAgaXRlbS51cGRhdGVSZWZDaGVja2VkKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDaGVja2VkT2ZBbGwoKTtcbiAgICB0aGlzLnJhaXNlU2VsZWN0ZWRDaGFuZ2UoKTtcbiAgfVxuXG4gIHJhaXNlU2VsZWN0ZWRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5nZW5lcmF0ZVNlbGVjdGlvbigpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZXZlbnRQYXJzZXIuZ2V0U2VsZWN0ZWRDaGFuZ2UodGhpcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodmFsdWVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSGVhZGVyVGVtcGxhdGVDb250ZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuaGVhZGVyVGVtcGxhdGVDb250ZXh0ID0ge1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGl0ZW06IHRoaXMuYWxsSXRlbSxcbiAgICAgIG9uQ2hlY2tlZENoYW5nZTogKCkgPT4gdGhpcy5vbkFsbENoZWNrZWRDaGFuZ2UoKSxcbiAgICAgIG9uQ29sbGFwc2VFeHBhbmQ6ICgpID0+IHRoaXMub25BbGxDb2xsYXBzZUV4cGFuZCgpLFxuICAgICAgb25GaWx0ZXJUZXh0Q2hhbmdlOiAodGV4dCkgPT4gdGhpcy5vbkZpbHRlclRleHRDaGFuZ2UodGV4dCksXG4gICAgICBvbkZpbHRlclNob3dIaWRkZW5DaGFuZ2U6IChzaG93SGlkZGVuKSA9PiB0aGlzLm9uRmlsdGVyU2hvd0hpZGRlbkNoYW5nZShzaG93SGlkZGVuKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGxldCBjaGVja2VkSXRlbXM6IFRyZWV2aWV3SXRlbVtdID0gW107XG4gICAgbGV0IHVuY2hlY2tlZEl0ZW1zOiBUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgIGlmICghaXNOaWwodGhpcy5pdGVtcykpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IFRyZWV2aWV3SGVscGVyLmNvbmNhdFNlbGVjdGlvbih0aGlzLml0ZW1zLCBjaGVja2VkSXRlbXMsIHVuY2hlY2tlZEl0ZW1zKTtcbiAgICAgIGNoZWNrZWRJdGVtcyA9IHNlbGVjdGlvbi5jaGVja2VkO1xuICAgICAgdW5jaGVja2VkSXRlbXMgPSBzZWxlY3Rpb24udW5jaGVja2VkO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgY2hlY2tlZEl0ZW1zLFxuICAgICAgdW5jaGVja2VkSXRlbXNcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJJdGVtcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJUZXh0ICE9PSAnJykge1xuICAgICAgY29uc3QgZmlsdGVySXRlbXM6IFRyZWV2aWV3SXRlbVtdID0gW107XG4gICAgICBjb25zdCBmaWx0ZXJUZXh0ID0gdGhpcy5maWx0ZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB0aGlzLmZpbHRlckl0ZW0oaXRlbSwgZmlsdGVyVGV4dCk7XG4gICAgICAgIGlmICghaXNOaWwobmV3SXRlbSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZmlsdGVySGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZEhpZGRlbkl0ZW0gPSB0aGlzLmZpbHRlckl0ZW1IaWRkZW4obmV3SXRlbSwgdGhpcy5zaG93SGlkZGVuKTtcblxuICAgICAgICAgICAgaWYgKCFpc05pbChmaWx0ZXJlZEhpZGRlbkl0ZW0pKSB7XG4gICAgICAgICAgICAgIGZpbHRlckl0ZW1zLnB1c2goZmlsdGVyZWRIaWRkZW5JdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVySXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5maWx0ZXJJdGVtcyA9IGZpbHRlckl0ZW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWx0ZXJJdGVtczogVHJlZXZpZXdJdGVtW10gPSBbXTtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IHRoaXMuZmlsdGVySXRlbUhpZGRlbihpdGVtLCB0aGlzLnNob3dIaWRkZW4pO1xuICAgICAgICBpZiAoIWlzTmlsKG5ld0l0ZW0pKSB7XG4gICAgICAgICAgZmlsdGVySXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmZpbHRlckl0ZW1zID0gZmlsdGVySXRlbXM7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDaGVja2VkT2ZBbGwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVySXRlbUhpZGRlbihpdGVtOiBUcmVldmlld0l0ZW0sIHNob3dIaWRkZW46IGJvb2xlYW4pIHtcbiAgICBpZiAoIXNob3dIaWRkZW4gJiYgdGhpcy5jb25maWcuZmlsdGVySGlkZGVuKSB7XG4gICAgICBpZiAoaXRlbS5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaXNOaWwoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZHJlbjogVHJlZXZpZXdJdGVtW10gPSBbXTtcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2hpbGQgPSB0aGlzLmZpbHRlckl0ZW1IaWRkZW4oY2hpbGQsIHNob3dIaWRkZW4pO1xuICAgICAgICAgICAgaWYgKCFpc05pbChuZXdDaGlsZCkpIHtcbiAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChuZXdDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgRmlsdGVyVHJlZXZpZXdJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgbmV3SXRlbS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG5ld0l0ZW0uY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIHJldHVybiBuZXdJdGVtO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gbmV3IEZpbHRlclRyZWV2aWV3SXRlbShuZXcgVHJlZXZpZXdJdGVtKHtcbiAgICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxuICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICAgICAgICAgIGNoZWNrZWQ6IGl0ZW0uY2hlY2tlZCxcbiAgICAgICAgICAgICAgaGlkZGVuOiBpdGVtLmhpZGRlbixcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiBpdGVtLmNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBuZXdJdGVtLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0l0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJJdGVtKGl0ZW06IFRyZWV2aWV3SXRlbSwgZmlsdGVyVGV4dDogc3RyaW5nKTogVHJlZXZpZXdJdGVtIHtcbiAgICBjb25zdCBpc01hdGNoID0gaW5jbHVkZXMoaXRlbS50ZXh0LnRvTG93ZXJDYXNlKCksIGZpbHRlclRleHQpO1xuICAgIGlmIChpc01hdGNoICYmICh0aGlzLnNob3dIaWRkZW4gfHwgKCF0aGlzLnNob3dIaWRkZW4gJiYgIWl0ZW0uaGlkZGVuKSkpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzTmlsKGl0ZW0uY2hpbGRyZW4pICYmICgoIXRoaXMuc2hvd0hpZGRlbiAmJiAhaXRlbS5oaWRkZW4pIHx8IHRoaXMuc2hvd0hpZGRlbikpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW46IFRyZWV2aWV3SXRlbVtdID0gW107XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3Q2hpbGQgPSB0aGlzLmZpbHRlckl0ZW0oY2hpbGQsIGZpbHRlclRleHQpO1xuICAgICAgICAgIGlmICghaXNOaWwobmV3Q2hpbGQpKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKG5ld0NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgRmlsdGVyVHJlZXZpZXdJdGVtKGl0ZW0pO1xuICAgICAgICAgIG5ld0l0ZW0uY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgbmV3SXRlbS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgIHJldHVybiBuZXdJdGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hlY2tlZE9mQWxsKCk6IHZvaWQge1xuICAgIGxldCBpdGVtQ2hlY2tlZDogYm9vbGVhbiA9IG51bGw7XG4gICAgZm9yIChjb25zdCBmaWx0ZXJJdGVtIG9mIHRoaXMuZmlsdGVySXRlbXMpIHtcbiAgICAgIGlmIChpdGVtQ2hlY2tlZCA9PT0gbnVsbCkge1xuICAgICAgICBpdGVtQ2hlY2tlZCA9IGZpbHRlckl0ZW0uY2hlY2tlZDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbUNoZWNrZWQgIT09IGZpbHRlckl0ZW0uY2hlY2tlZCkge1xuICAgICAgICBpdGVtQ2hlY2tlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1DaGVja2VkID09PSBudWxsKSB7XG4gICAgICBpdGVtQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuYWxsSXRlbS5jaGVja2VkID0gaXRlbUNoZWNrZWQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbGxhcHNlZE9mQWxsKCk6IHZvaWQge1xuICAgIGxldCBoYXNJdGVtRXhwYW5kZWQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGZpbHRlckl0ZW0gb2YgdGhpcy5maWx0ZXJJdGVtcykge1xuICAgICAgaWYgKCFmaWx0ZXJJdGVtLmNvbGxhcHNlZCkge1xuICAgICAgICBoYXNJdGVtRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFsbEl0ZW0uY29sbGFwc2VkID0gIWhhc0l0ZW1FeHBhbmRlZDtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICNkZWZhdWx0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIGxldC1vbkNvbGxhcHNlRXhwYW5kPVwib25Db2xsYXBzZUV4cGFuZFwiXG4gIGxldC1vbkNoZWNrZWRDaGFuZ2U9XCJvbkNoZWNrZWRDaGFuZ2VcIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0taW5saW5lIHJvdy1pdGVtXCI+XG4gICAgPGkgKm5nSWY9XCJpdGVtLmNoaWxkcmVuXCIgKGNsaWNrKT1cIm9uQ29sbGFwc2VFeHBhbmQoKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFtuZ1N3aXRjaF09XCJpdGVtLmNvbGxhcHNlZFwiPlxuICAgICAgPHN2ZyAqbmdTd2l0Y2hDYXNlPVwidHJ1ZVwiIHdpZHRoPVwiMC44cmVtXCIgaGVpZ2h0PVwiMC44cmVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktY2FyZXQtcmlnaHQtZmlsbFwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0xMi4xNCA4Ljc1M2wtNS40ODIgNC43OTZjLS42NDYuNTY2LTEuNjU4LjEwNi0xLjY1OC0uNzUzVjMuMjA0YTEgMSAwIDAgMSAxLjY1OS0uNzUzbDUuNDggNC43OTZhMSAxIDAgMCAxIDAgMS41MDZ6XCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPHN2ZyAqbmdTd2l0Y2hDYXNlPVwiZmFsc2VcIiB3aWR0aD1cIjAuOHJlbVwiIGhlaWdodD1cIjAuOHJlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWNhcmV0LWRvd24tZmlsbFwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk03LjI0NyAxMS4xNEwyLjQ1MSA1LjY1OEMxLjg4NSA1LjAxMyAyLjM0NSA0IDMuMjA0IDRoOS41OTJhMSAxIDAgMCAxIC43NTMgMS42NTlsLTQuNzk2IDUuNDhhMSAxIDAgMCAxLTEuNTA2IDB6XCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvaT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIFsobmdNb2RlbCldPVwiaXRlbS5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGVja2VkQ2hhbmdlKClcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiIFtpbmRldGVybWluYXRlXT1cIml0ZW0uaW5kZXRlcm1pbmF0ZVwiIC8+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgKGNsaWNrKT1cIml0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7IG9uQ2hlY2tlZENoYW5nZSgpXCI+XG4gICAgICAgIHt7aXRlbS50ZXh0fX1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdEhlYWRlclRlbXBsYXRlIGxldC1jb25maWc9XCJjb25maWdcIiBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtb25Db2xsYXBzZUV4cGFuZD1cIm9uQ29sbGFwc2VFeHBhbmRcIlxuICBsZXQtb25DaGVja2VkQ2hhbmdlPVwib25DaGVja2VkQ2hhbmdlXCIgbGV0LW9uRmlsdGVyVGV4dENoYW5nZT1cIm9uRmlsdGVyVGV4dENoYW5nZVwiIGxldC1vbkZpbHRlclNob3dIaWRkZW5DaGFuZ2U9XCJvbkZpbHRlclNob3dIaWRkZW5DaGFuZ2VcIj5cbiAgPGRpdiAqbmdJZj1cImNvbmZpZy5oYXNGaWx0ZXJcIiBjbGFzcz1cInJvdyByb3ctZmlsdGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwiaTE4bi5nZXRGaWx0ZXJQbGFjZWhvbGRlcigpXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJUZXh0XCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXJUZXh0Q2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIiAqbmdJZj1cImNvbmZpZy5maWx0ZXJIaWRkZW5cIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cImZpbHRlclRvZ2dsZVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA3cHg7XCIgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzaG93SGlkZGVuXCJcbiAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclNob3dIaWRkZW5DaGFuZ2UoJGV2ZW50KVwiIC8+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZmlsdGVyVG9nZ2xlXCI+U2hvdyBIaWRkZW48L2xhYmVsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImhhc0ZpbHRlckl0ZW1zXCI+XG4gICAgPGRpdiAqbmdJZj1cImNvbmZpZy5oYXNBbGxDaGVja0JveCB8fCBjb25maWcuaGFzQ29sbGFwc2VFeHBhbmRcIiBjbGFzcz1cInJvdyByb3ctYWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIgKm5nSWY9XCJjb25maWcuaGFzQWxsQ2hlY2tCb3hcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpdGVtLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2UoKVwiXG4gICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpdGVtLmluZGV0ZXJtaW5hdGVcIiAvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiAoY2xpY2spPVwiaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDsgb25DaGVja2VkQ2hhbmdlKClcIj5cbiAgICAgICAgICAgIHt7aTE4bi5nZXRBbGxDaGVja2JveFRleHQoKX19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCAqbmdJZj1cImNvbmZpZy5oYXNDb2xsYXBzZUV4cGFuZFwiIGNsYXNzPVwiZmxvYXQtcmlnaHQgZm9ybS1jaGVjay1sYWJlbFwiIChjbGljayk9XCJvbkNvbGxhcHNlRXhwYW5kKClcIj5cbiAgICAgICAgICA8aSBbdGl0bGVdPVwiaTE4bi5nZXRUb29sdGlwQ29sbGFwc2VFeHBhbmRUZXh0KGl0ZW0uY29sbGFwc2VkKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFtuZ1N3aXRjaF09XCJpdGVtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgPHN2ZyAqbmdTd2l0Y2hDYXNlPVwidHJ1ZVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktYXJyb3dzLWFuZ2xlLWV4cGFuZFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMS41IDEwLjAzNmEuNS41IDAgMCAxIC41LjV2My41aDMuNWEuNS41IDAgMCAxIDAgMWgtNGEuNS41IDAgMCAxLS41LS41di00YS41LjUgMCAwIDEgLjUtLjV6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk02LjM1NCA5LjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNC41IDQuNWEuNS41IDAgMCAxLS43MDgtLjcwOGw0LjUtNC41YS41LjUgMCAwIDEgLjcwOCAwem04LjUtOC41YS41LjUgMCAwIDEgMCAuNzA4bC00LjUgNC41YS41LjUgMCAwIDEtLjcwOC0uNzA4bDQuNS00LjVhLjUuNSAwIDAgMSAuNzA4IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMC4wMzYgMS41YS41LjUgMCAwIDEgLjUtLjVoNGEuNS41IDAgMCAxIC41LjV2NGEuNS41IDAgMSAxLTEgMFYyaC0zLjVhLjUuNSAwIDAgMS0uNS0uNXpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnICpuZ1N3aXRjaENhc2U9XCJmYWxzZVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktYXJyb3dzLWFuZ2xlLWNvbnRyYWN0XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk05LjUgMi4wMzZhLjUuNSAwIDAgMSAuNS41djMuNWgzLjVhLjUuNSAwIDAgMSAwIDFoLTRhLjUuNSAwIDAgMS0uNS0uNXYtNGEuNS41IDAgMCAxIC41LS41elwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMzU0IDEuNjQ2YS41LjUgMCAwIDEgMCAuNzA4bC00LjUgNC41YS41LjUgMCAxIDEtLjcwOC0uNzA4bDQuNS00LjVhLjUuNSAwIDAgMSAuNzA4IDB6bS03LjUgNy41YS41LjUgMCAwIDEgMCAuNzA4bC00LjUgNC41YS41LjUgMCAwIDEtLjcwOC0uNzA4bDQuNS00LjVhLjUuNSAwIDAgMSAuNzA4IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yLjAzNiA5LjVhLjUuNSAwIDAgMSAuNS0uNWg0YS41LjUgMCAwIDEgLjUuNXY0YS41LjUgMCAwIDEtMSAwVjEwaC0zLjVhLjUuNSAwIDAgMS0uNS0uNXpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9pPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cImNvbmZpZy5oYXNEaXZpZGVyXCIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJ0cmVldmlldy1oZWFkZXJcIj5cbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlclRlbXBsYXRlIHx8IGRlZmF1bHRIZWFkZXJUZW1wbGF0ZVwiXG4gICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImhlYWRlclRlbXBsYXRlQ29udGV4dFwiPlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48ZGl2IFtuZ1N3aXRjaF09XCJoYXNGaWx0ZXJJdGVtc1wiPlxuICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJ0cnVlXCIgY2xhc3M9XCJ0cmVldmlldy1jb250YWluZXJcIiBbc3R5bGUubWF4LWhlaWdodC5weF09XCJtYXhIZWlnaHRcIj5cbiAgICA8bmd4LXRyZWV2aWV3LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVySXRlbXNcIiBbY29uZmlnXT1cImNvbmZpZ1wiIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgW3RlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZSB8fCBkZWZhdWx0SXRlbVRlbXBsYXRlXCIgKGNoZWNrZWRDaGFuZ2UpPVwib25JdGVtQ2hlY2tlZENoYW5nZShpdGVtLCAkZXZlbnQpXCI+XG4gICAgPC9uZ3gtdHJlZXZpZXctaXRlbT5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nU3dpdGNoQ2FzZT1cImZhbHNlXCIgY2xhc3M9XCJ0cmVldmlldy10ZXh0XCI+XG4gICAge3tpMThuLmdldEZpbHRlck5vSXRlbXNGb3VuZFRleHQoKX19XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=