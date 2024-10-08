/// <amd-module name="@scom/scom-random-picker/formSchema.ts" />
declare module "@scom/scom-random-picker/formSchema.ts" {
    const _default: {
        dataSchema: {
            type: string;
            properties: {
                title: {
                    type: string;
                    label: string;
                };
                size: {
                    type: string;
                    minimum: number;
                };
                items: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                                required: boolean;
                            };
                            icon: {
                                type: string;
                                format: string;
                                title: string;
                            };
                            weight: {
                                type: string;
                                default: number;
                                minimum: number;
                            };
                        };
                    };
                };
            };
        };
        uiSchema: {
            type: string;
            elements: ({
                type: string;
                scope: string;
                options?: undefined;
            } | {
                type: string;
                scope: string;
                options: {
                    detail: {
                        type: string;
                    };
                };
            })[];
        };
    };
    export default _default;
}
/// <amd-module name="@scom/scom-random-picker/data.json.ts" />
declare module "@scom/scom-random-picker/data.json.ts" {
    const _default_1: {
        defaultBuilderData: {
            size: number;
            items: {
                name: string;
                weight: number;
            }[];
        };
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-random-picker/model.ts" />
declare module "@scom/scom-random-picker/model.ts" {
    import { Module } from '@ijstech/components';
    export const colors: string[];
    export interface IItem {
        name: string;
        icon?: string;
        weight?: number;
    }
    export interface IWheelPickerData {
        title?: string;
        items: IItem[];
        size?: number;
    }
    export class Model {
        private module;
        private _data;
        private _items;
        private _currentItem;
        private currentDeg;
        renderWheelPicker: () => void;
        constructor(module: Module);
        get title(): string;
        get size(): number;
        get items(): IItem[];
        get totalWeight(): number;
        get currentItem(): IItem;
        getConfigurators(): {
            name: string;
            target: string;
            getActions: (category?: string) => any[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        setData(value: IWheelPickerData): Promise<void>;
        getData(): IWheelPickerData;
        getTag(): any;
        setTag(value: any): void;
        private updateTag;
        private updateStyle;
        private updateTheme;
        private _getActions;
        handleSpin(): {
            item: IItem;
            deg: number;
        };
    }
}
/// <amd-module name="@scom/scom-random-picker/index.css.ts" />
declare module "@scom/scom-random-picker/index.css.ts" {
    export const spinActionStyle: string;
    export const markerStyle: string;
    export const wheelStyle: string;
    export const itemStyle: string;
    export const textCenterStyle: string;
}
/// <amd-module name="@scom/scom-random-picker" />
declare module "@scom/scom-random-picker" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { IItem } from "@scom/scom-random-picker/model.ts";
    interface ScomRandomPickerElement extends ControlElement {
        title?: string;
        items?: IItem[];
        size?: number;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-random-picker']: ScomRandomPickerElement;
            }
        }
    }
    export default class ScomRandomPicker extends Module {
        private model;
        private wheelContainer;
        private lbTitle;
        private pnlItems;
        private btnSpin;
        private pnlMarker;
        private lbEmpty;
        private mdResult;
        private imgResult;
        private lbResult;
        private btnRemove;
        tag: any;
        static create(options?: ScomRandomPickerElement, parent?: Container): Promise<ScomRandomPicker>;
        get title(): string;
        get size(): number;
        get items(): IItem[];
        getConfigurators(): {
            name: string;
            target: string;
            getActions: (category?: string) => any[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        setData(value: any): Promise<void>;
        getData(): import("@scom/scom-random-picker/model.ts").IWheelPickerData;
        getTag(): any;
        setTag(value: any): void;
        private initModel;
        private renderWheelPicker;
        private resizeWheelPicker;
        private handleSpin;
        private handleRemoveChoice;
        private handleCloseModal;
        init(): Promise<void>;
        render(): any;
    }
}
