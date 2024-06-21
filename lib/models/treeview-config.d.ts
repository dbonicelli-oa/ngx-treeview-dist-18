import * as i0 from "@angular/core";
export declare class TreeviewConfig {
    hasAllCheckBox: boolean;
    hasFilter: boolean;
    hasCollapseExpand: boolean;
    decoupleChildFromParent: boolean;
    filterHidden: boolean;
    maxHeight: number;
    get hasDivider(): boolean;
    static create(fields?: {
        hasAllCheckBox?: boolean;
        hasFilter?: boolean;
        hasCollapseExpand?: boolean;
        decoupleChildFromParent?: boolean;
        filterHidden?: boolean;
        maxHeight?: number;
    }): TreeviewConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeviewConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TreeviewConfig>;
}
