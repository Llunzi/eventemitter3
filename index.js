"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var Eventemitter = /** @class */ (function (_super) {
    __extends(Eventemitter, _super);
    function Eventemitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eventemitter.prototype.prefixEventName = function (name) {
        return 'JD@@B016E0AD63452AE4' + name;
    };
    Eventemitter.prototype.invoke = function (name) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            if (_this.eventNames().indexOf(name) <= -1) {
                reject('have no watcher at event(' + name + ')');
            }
            _this.once(_this.prefixEventName(name), resolve);
            _this.emit.apply(_this, [name].concat(Array.from(args)));
        });
    };
    Eventemitter.prototype.watch = function (name, handler) {
        var _this = this;
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.emit(_this.prefixEventName(name), handler.apply(void 0, Array.from(args)));
        };
        this.on(name, fn);
        return this;
    };
    return Eventemitter;
}(eventemitter3_1.default));
exports.default = Eventemitter;
