var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { OpaqueToken } from "@angular/core";
export function _window() {
    return window;
}
export var WINDOW = new OpaqueToken('WindowToken');
export var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
export var BrowserWindowRef = (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        _super.call(this);
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));
export var WINDOW_PROVIDERS = [
    { provide: WindowRef, useClass: BrowserWindowRef },
    { provide: WINDOW, useFactory: _window, deps: [] },
];
//# sourceMappingURL=index.js.map
