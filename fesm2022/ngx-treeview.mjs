import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, HostBinding, HostListener, Injectable, Component, ViewChild, Pipe, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import { isNil, pull, concat, isString, isBoolean, includes } from 'lodash';

class DropdownDirective {
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

class DropdownMenuDirective {
    dropdown;
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    static ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(i0.ɵɵdirectiveInject(DropdownDirective)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropdownMenuDirective, selectors: [["", "ngxDropdownMenu", ""]], hostVars: 4, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("dropdown-menu", true)("show", ctx.dropdown.isOpen);
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDropdownMenu]',
                host: {
                    '[class.dropdown-menu]': 'true',
                    '[class.show]': 'dropdown.isOpen'
                }
            }]
    }], () => [{ type: DropdownDirective }], null); })();

class DropdownToggleDirective {
    dropdown;
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
    static ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(i0.ɵɵdirectiveInject(DropdownDirective), i0.ɵɵdirectiveInject(i0.ElementRef)); };
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
    }], () => [{ type: DropdownDirective }, { type: i0.ElementRef }], null); })();

const TreeviewHelper = {
    findItem,
    findItemInList,
    findParent,
    removeItem,
    concatSelection
};
function findItem(root, value) {
    if (isNil(root)) {
        return undefined;
    }
    if (root.value === value) {
        return root;
    }
    if (root.children) {
        for (const child of root.children) {
            const foundItem = findItem(child, value);
            if (foundItem) {
                return foundItem;
            }
        }
    }
    return undefined;
}
function findItemInList(list, value) {
    if (isNil(list)) {
        return undefined;
    }
    for (const item of list) {
        const foundItem = findItem(item, value);
        if (foundItem) {
            return foundItem;
        }
    }
    return undefined;
}
function findParent(root, item) {
    if (isNil(root) || isNil(root.children)) {
        return undefined;
    }
    for (const child of root.children) {
        if (child === item) {
            return root;
        }
        else {
            const parent = findParent(child, item);
            if (parent) {
                return parent;
            }
        }
    }
    return undefined;
}
function removeItem(root, item) {
    const parent = findParent(root, item);
    if (parent) {
        pull(parent.children, item);
        if (parent.children.length === 0) {
            parent.children = undefined;
        }
        else {
            parent.correctChecked();
        }
        return true;
    }
    return false;
}
function concatSelection(items, checked, unchecked) {
    let checkedItems = [...checked];
    let uncheckedItems = [...unchecked];
    for (const item of items) {
        const selection = item.getSelection();
        checkedItems = concat(checkedItems, selection.checkedItems);
        uncheckedItems = concat(uncheckedItems, selection.uncheckedItems);
    }
    return {
        checked: checkedItems,
        unchecked: uncheckedItems
    };
}

class TreeviewItem {
    internalDisabled = false;
    internalChecked = true;
    internalCollapsed = false;
    internalHidden = false;
    internalChildren;
    text;
    value;
    constructor(item, autoCorrectChecked = false) {
        if (isNil(item)) {
            throw new Error('Item must be defined');
        }
        if (isString(item.text)) {
            this.text = item.text;
        }
        else {
            throw new Error('A text of item must be string object');
        }
        this.value = item.value;
        if (isBoolean(item.checked)) {
            this.checked = item.checked;
        }
        if (isBoolean(item.collapsed)) {
            this.collapsed = item.collapsed;
        }
        if (isBoolean(item.disabled)) {
            this.disabled = item.disabled;
        }
        if (isBoolean(item.hidden)) {
            this.hidden = item.hidden;
        }
        if (!isNil(item.children) && item.children.length > 0) {
            this.children = item.children.map(child => {
                if (this.disabled === true) {
                    child.disabled = true;
                }
                return new TreeviewItem(child);
            });
        }
        if (autoCorrectChecked) {
            this.correctChecked();
        }
    }
    get checked() {
        return this.internalChecked;
    }
    set checked(value) {
        if (!this.internalDisabled) {
            if (this.internalChecked !== value) {
                this.internalChecked = value;
            }
        }
    }
    get hidden() {
        return this.internalHidden;
    }
    set hidden(value) {
        if (!this.internalHidden) {
            if (this.internalHidden !== value) {
                this.internalHidden = value;
            }
        }
    }
    get indeterminate() {
        return this.checked === undefined;
    }
    setCheckedRecursive(value) {
        if (!this.internalDisabled) {
            this.internalChecked = value;
            if (!isNil(this.internalChildren)) {
                this.internalChildren.forEach(child => child.setCheckedRecursive(value));
            }
        }
    }
    get disabled() {
        return this.internalDisabled;
    }
    set disabled(value) {
        if (this.internalDisabled !== value) {
            this.internalDisabled = value;
            if (!isNil(this.internalChildren)) {
                this.internalChildren.forEach(child => child.disabled = value);
            }
        }
    }
    get collapsed() {
        return this.internalCollapsed;
    }
    set collapsed(value) {
        if (this.internalCollapsed !== value) {
            this.internalCollapsed = value;
        }
    }
    setCollapsedRecursive(value) {
        this.internalCollapsed = value;
        if (!isNil(this.internalChildren)) {
            this.internalChildren.forEach(child => child.setCollapsedRecursive(value));
        }
    }
    get children() {
        return this.internalChildren;
    }
    set children(value) {
        if (this.internalChildren !== value) {
            if (!isNil(value) && value.length === 0) {
                throw new Error('Children must be not an empty array');
            }
            this.internalChildren = value;
            if (!isNil(this.internalChildren)) {
                let checked = null;
                this.internalChildren.forEach(child => {
                    if (checked === null) {
                        checked = child.checked;
                    }
                    else {
                        if (child.checked !== checked) {
                            checked = undefined;
                            return;
                        }
                    }
                });
                this.internalChecked = checked;
            }
        }
    }
    getSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (isNil(this.internalChildren)) {
            if (this.internalChecked) {
                checkedItems.push(this);
            }
            else {
                uncheckedItems.push(this);
            }
        }
        else {
            const selection = TreeviewHelper.concatSelection(this.internalChildren, checkedItems, uncheckedItems);
            checkedItems = selection.checked;
            uncheckedItems = selection.unchecked;
        }
        return {
            checkedItems,
            uncheckedItems
        };
    }
    correctChecked() {
        this.internalChecked = this.getCorrectChecked();
    }
    getCorrectChecked() {
        let checked = null;
        if (!isNil(this.internalChildren)) {
            for (const child of this.internalChildren) {
                child.internalChecked = child.getCorrectChecked();
                if (checked === null) {
                    checked = child.internalChecked;
                }
                else if (checked !== child.internalChecked) {
                    checked = undefined;
                    break;
                }
            }
        }
        else {
            checked = this.checked;
        }
        return checked;
    }
}

class TreeviewI18n {
    static ɵfac = function TreeviewI18n_Factory(t) { return new (t || TreeviewI18n)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TreeviewI18n, factory: TreeviewI18n.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewI18n, [{
        type: Injectable
    }], null, null); })();
class DefaultTreeviewI18n extends TreeviewI18n {
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

class TreeviewConfig {
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

class TreeviewEventParser {
    static ɵfac = function TreeviewEventParser_Factory(t) { return new (t || TreeviewEventParser)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TreeviewEventParser, factory: TreeviewEventParser.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
class DefaultTreeviewEventParser extends TreeviewEventParser {
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
class DownlineTreeviewEventParser extends TreeviewEventParser {
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
class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
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

const _c0 = (a0, a1, a2) => ({ item: a0, onCollapseExpand: a1, onCheckedChange: a2 });
function TreeviewItemComponent_div_0_ng_template_1_Template(rf, ctx) { }
function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-treeview-item", 5);
    i0.ɵɵlistener("checkedChange", function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { const child_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onChildCheckedChange(child_r2, $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config", ctx_r2.config)("item", child_r2)("template", ctx_r2.template);
} }
function TreeviewItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.item.children);
} }
function TreeviewItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, TreeviewItemComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 2)(2, TreeviewItemComponent_div_0_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.template)("ngTemplateOutletContext", i0.ɵɵpureFunction3(3, _c0, ctx_r2.item, ctx_r2.onCollapseExpand, ctx_r2.onCheckedChange));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.item.collapsed);
} }
class TreeviewItemComponent {
    defaultConfig;
    config;
    template;
    item;
    checkedChange = new EventEmitter();
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
        this.config = this.defaultConfig;
    }
    onCollapseExpand = () => {
        this.item.collapsed = !this.item.collapsed;
    };
    onCheckedChange = () => {
        const checked = this.item.checked;
        if (!isNil(this.item.children) && !this.config.decoupleChildFromParent) {
            this.item.children.forEach(child => child.setCheckedRecursive(checked));
        }
        this.checkedChange.emit(checked);
    };
    onChildCheckedChange(child, checked) {
        if (!this.config.decoupleChildFromParent) {
            let itemChecked = null;
            for (const childItem of this.item.children) {
                if (itemChecked === null) {
                    itemChecked = childItem.checked;
                }
                else if (itemChecked !== childItem.checked) {
                    itemChecked = undefined;
                    break;
                }
            }
            if (itemChecked === null) {
                itemChecked = false;
            }
            if (this.item.checked !== itemChecked) {
                this.item.checked = itemChecked;
            }
        }
        this.checkedChange.emit(checked);
    }
    static ɵfac = function TreeviewItemComponent_Factory(t) { return new (t || TreeviewItemComponent)(i0.ɵɵdirectiveInject(TreeviewConfig)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeviewItemComponent, selectors: [["ngx-treeview-item"]], inputs: { config: "config", template: "template", item: "item" }, outputs: { checkedChange: "checkedChange" }, decls: 1, vars: 1, consts: [["class", "treeview-item", 4, "ngIf"], [1, "treeview-item"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "checkedChange", "config", "item", "template"]], template: function TreeviewItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeviewItemComponent_div_0_Template, 3, 7, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.item);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i5.NgTemplateOutlet, TreeviewItemComponent], styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]{white-space:nowrap}[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]   .treeview-item[_ngcontent-%COMP%]{margin-left:2rem}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewItemComponent, [{
        type: Component,
        args: [{ selector: 'ngx-treeview-item', template: "<div *ngIf=\"item\" class=\"treeview-item\">\n  <ng-template [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\n  </ng-template>\n  <div *ngIf=\"!item.collapsed\">\n    <ngx-treeview-item [config]=\"config\" *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\"\n      (checkedChange)=\"onChildCheckedChange(child, $event)\">\n    </ngx-treeview-item>\n  </div>\n</div>\n", styles: [":host{display:block}:host .treeview-item{white-space:nowrap}:host .treeview-item .treeview-item{margin-left:2rem}\n"] }]
    }], () => [{ type: TreeviewConfig }], { config: [{
            type: Input
        }], template: [{
            type: Input
        }], item: [{
            type: Input
        }], checkedChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeviewItemComponent, { className: "TreeviewItemComponent" }); })();

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
class TreeviewComponent {
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
    static ɵfac = function TreeviewComponent_Factory(t) { return new (t || TreeviewComponent)(i0.ɵɵdirectiveInject(TreeviewI18n), i0.ɵɵdirectiveInject(TreeviewConfig), i0.ɵɵdirectiveInject(TreeviewEventParser)); };
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
        } }, dependencies: [i4.DefaultValueAccessor, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NgForOf, i5.NgIf, i5.NgTemplateOutlet, i5.NgSwitch, i5.NgSwitchCase, TreeviewItemComponent], styles: ["[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-filter[_ngcontent-%COMP%]{margin-bottom:.5rem}[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-all[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]{margin-bottom:.3rem;flex-wrap:nowrap}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer;margin-right:.3rem}.treeview-container[_ngcontent-%COMP%]{overflow-y:auto;padding-right:.3rem}.treeview-text[_ngcontent-%COMP%]{padding:.3rem 0;white-space:nowrap}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewComponent, [{
        type: Component,
        args: [{ selector: 'ngx-treeview', template: "<ng-template #defaultItemTemplate let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\n  let-onCheckedChange=\"onCheckedChange\">\n  <div class=\"form-inline row-item\">\n    <i *ngIf=\"item.children\" (click)=\"onCollapseExpand()\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\n      <svg *ngSwitchCase=\"true\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-right-fill\"\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z\" />\n      </svg>\n      <svg *ngSwitchCase=\"false\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-down-fill\"\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\" />\n      </svg>\n    </i>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\n        [disabled]=\"item.disabled\" [indeterminate]=\"item.indeterminate\" />\n      <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\n        {{item.text}}\n      </label>\n    </div>\n  </div>\n</ng-template>\n<ng-template #defaultHeaderTemplate let-config=\"config\" let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\n  let-onCheckedChange=\"onCheckedChange\" let-onFilterTextChange=\"onFilterTextChange\" let-onFilterShowHiddenChange=\"onFilterShowHiddenChange\">\n  <div *ngIf=\"config.hasFilter\" class=\"row row-filter\">\n    <div class=\"col-12\">\n      <input class=\"form-control\" type=\"text\" [placeholder]=\"i18n.getFilterPlaceholder()\" [(ngModel)]=\"filterText\"\n        (ngModelChange)=\"onFilterTextChange($event)\" />\n    </div>\n    <div class=\"col-12\" style=\"margin-top: 10px\" *ngIf=\"config.filterHidden\">\n      <input class=\"form-check-input\" id=\"filterToggle\" style=\"margin-right: 7px;\" type=\"checkbox\" [(ngModel)]=\"showHidden\"\n             (ngModelChange)=\"onFilterShowHiddenChange($event)\" />\n      <label class=\"form-check-label\" for=\"filterToggle\">Show Hidden</label>\n    </div>\n  </div>\n  <div *ngIf=\"hasFilterItems\">\n    <div *ngIf=\"config.hasAllCheckBox || config.hasCollapseExpand\" class=\"row row-all\">\n      <div class=\"col-12\">\n        <div class=\"form-check form-check-inline\" *ngIf=\"config.hasAllCheckBox\">\n          <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\n            [indeterminate]=\"item.indeterminate\" />\n          <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\n            {{i18n.getAllCheckboxText()}}\n          </label>\n        </div>\n        <label *ngIf=\"config.hasCollapseExpand\" class=\"float-right form-check-label\" (click)=\"onCollapseExpand()\">\n          <i [title]=\"i18n.getTooltipCollapseExpandText(item.collapsed)\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\n            <svg *ngSwitchCase=\"true\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-expand\"\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\"\n                d=\"M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z\" />\n            </svg>\n            <svg *ngSwitchCase=\"false\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-contract\"\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\"\n                d=\"M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z\" />\n            </svg>\n          </i>\n        </label>\n      </div>\n    </div>\n    <div *ngIf=\"config.hasDivider\" class=\"dropdown-divider\"></div>\n  </div>\n</ng-template>\n<div class=\"treeview-header\">\n  <ng-template [ngTemplateOutlet]=\"headerTemplate || defaultHeaderTemplate\"\n    [ngTemplateOutletContext]=\"headerTemplateContext\">\n  </ng-template>\n</div>\n<div [ngSwitch]=\"hasFilterItems\">\n  <div *ngSwitchCase=\"true\" class=\"treeview-container\" [style.max-height.px]=\"maxHeight\">\n    <ngx-treeview-item *ngFor=\"let item of filterItems\" [config]=\"config\" [item]=\"item\"\n      [template]=\"itemTemplate || defaultItemTemplate\" (checkedChange)=\"onItemCheckedChange(item, $event)\">\n    </ngx-treeview-item>\n  </div>\n  <div *ngSwitchCase=\"false\" class=\"treeview-text\">\n    {{i18n.getFilterNoItemsFoundText()}}\n  </div>\n</div>\n", styles: [":host .treeview-header .row-filter{margin-bottom:.5rem}:host .treeview-header .row-all .bi{cursor:pointer}:host .treeview-container .row-item{margin-bottom:.3rem;flex-wrap:nowrap}:host .treeview-container .row-item .bi{cursor:pointer;margin-right:.3rem}.treeview-container{overflow-y:auto;padding-right:.3rem}.treeview-text{padding:.3rem 0;white-space:nowrap}\n"] }]
    }], () => [{ type: TreeviewI18n }, { type: TreeviewConfig }, { type: TreeviewEventParser }], { headerTemplate: [{
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

class DropdownTreeviewComponent {
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
    static ɵfac = function DropdownTreeviewComponent_Factory(t) { return new (t || DropdownTreeviewComponent)(i0.ɵɵdirectiveInject(TreeviewI18n), i0.ɵɵdirectiveInject(TreeviewConfig)); };
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
        } }, dependencies: [i5.NgClass, TreeviewComponent, DropdownDirective, DropdownMenuDirective, DropdownToggleDirective], styles: [".dropdown[_ngcontent-%COMP%]{width:100%;display:inline-block}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-right:.9rem;text-align:left;overflow:hidden;padding-right:30px;text-overflow:ellipsis}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{position:absolute;right:.6rem;margin-top:.6rem}.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]{padding:0 .6rem}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownTreeviewComponent, [{
        type: Component,
        args: [{ selector: 'ngx-dropdown-treeview', template: "<div class=\"dropdown\" ngxDropdown>\n  <button class=\"btn\" [ngClass]=\"buttonClass\" type=\"button\" role=\"button\" ngxDropdownToggle>\n    {{buttonLabel}}\n  </button>\n  <div ngxDropdownMenu aria-labelledby=\"dropdownMenu\" (click)=\"$event.stopPropagation()\">\n    <div class=\"dropdown-container\">\n      <ngx-treeview [config]=\"config\" [headerTemplate]=\"headerTemplate\" [items]=\"items\" [itemTemplate]=\"itemTemplate\"\n        (selectedChange)=\"onSelectedChange($event)\" (filterChange)=\"onFilterChange($event)\">\n      </ngx-treeview>\n    </div>\n  </div>\n</div>\n", styles: [".dropdown{width:100%;display:inline-block}.dropdown button{width:100%;margin-right:.9rem;text-align:left;overflow:hidden;padding-right:30px;text-overflow:ellipsis}.dropdown button:after{position:absolute;right:.6rem;margin-top:.6rem}.dropdown .dropdown-menu .dropdown-container{padding:0 .6rem}\n"] }]
    }], () => [{ type: TreeviewI18n }, { type: TreeviewConfig }], { buttonClass: [{
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

class TreeviewPipe {
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

class TreeviewModule {
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

/*
 * Public API Surface of ngx-treeview
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DefaultTreeviewEventParser, DefaultTreeviewI18n, DownlineTreeviewEventParser, DropdownDirective, DropdownToggleDirective, DropdownTreeviewComponent, OrderDownlineTreeviewEventParser, TreeviewComponent, TreeviewConfig, TreeviewEventParser, TreeviewHelper, TreeviewI18n, TreeviewItem, TreeviewModule, TreeviewPipe };
//# sourceMappingURL=ngx-treeview.mjs.map
