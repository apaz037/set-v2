"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.increaseTimeAsync = exports.mineBlockAsync = exports.getLastBlockTimestamp = exports.getTransactionTimestamp = exports.addSnapshotBeforeRestoreAfterEach = exports.getWaffleExpect = exports.getProvider = void 0;
// Buidler automatically injects the waffle version into chai
var chai_1 = __importDefault(require("chai"));
// Use BUIDLER version of providers
var buidler_1 = require("@nomiclabs/buidler");
var utils_1 = require("ethers/utils");
var common_1 = require("../common");
var provider = buidler_1.ethers.provider;
// const blockchain = new Blockchain(provider);
// BUIDLER-SPECIFIC Provider
exports.getProvider = function () {
    return buidler_1.ethers.provider;
};
// BUIDLER / WAFFLE
exports.getWaffleExpect = function () {
    return chai_1.default.expect;
};
// And this is our test sandboxing. It snapshots and restores between each test.
// Note: if a test suite uses fastForward at all, then it MUST also use these snapshots,
// otherwise it will update the block time of the EVM and future tests that expect a
// starting timestamp will fail.
exports.addSnapshotBeforeRestoreAfterEach = function () {
    var blockchain = new common_1.Blockchain(provider);
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchain.saveSnapshotAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchain.revertAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
};
function getTransactionTimestamp(asyncTxn) {
    return __awaiter(this, void 0, void 0, function () {
        var txData, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, asyncTxn];
                case 1:
                    txData = _b.sent();
                    _a = utils_1.BigNumber.bind;
                    return [4 /*yield*/, provider.getBlock(txData.block)];
                case 2: return [2 /*return*/, new (_a.apply(utils_1.BigNumber, [void 0, (_b.sent()).timestamp]))()];
            }
        });
    });
}
exports.getTransactionTimestamp = getTransactionTimestamp;
function getLastBlockTimestamp() {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.BigNumber.bind;
                    return [4 /*yield*/, provider.getBlock("latest")];
                case 1: return [2 /*return*/, new (_a.apply(utils_1.BigNumber, [void 0, (_b.sent()).timestamp]))()];
            }
        });
    });
}
exports.getLastBlockTimestamp = getLastBlockTimestamp;
function mineBlockAsync() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendJSONRpcRequestAsync("evm_mine", [])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.mineBlockAsync = mineBlockAsync;
function increaseTimeAsync(duration) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendJSONRpcRequestAsync("evm_increaseTime", [duration.toNumber()])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, mineBlockAsync()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.increaseTimeAsync = increaseTimeAsync;
function sendJSONRpcRequestAsync(method, params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, provider.send(method, params)];
        });
    });
}
