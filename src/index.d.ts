import { OpaqueToken } from "@angular/core";
export declare function _window(): any;
export declare const WINDOW: OpaqueToken;
export declare abstract class WindowRef {
    readonly nativeWindow: any;
}
export declare class BrowserWindowRef extends WindowRef {
    constructor();
    readonly nativeWindow: any;
}
export declare const WINDOW_PROVIDERS: ({
    provide: typeof WindowRef;
    useClass: typeof BrowserWindowRef;
} | {
    provide: OpaqueToken;
    useFactory: () => any;
    deps: any[];
})[];
