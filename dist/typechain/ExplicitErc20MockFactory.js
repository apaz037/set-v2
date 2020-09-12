"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplicitErc20MockFactory = void 0;
var ethers_1 = require("ethers");
var ExplicitErc20MockFactory = /** @class */ (function (_super) {
    __extends(ExplicitErc20MockFactory, _super);
    function ExplicitErc20MockFactory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    ExplicitErc20MockFactory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides);
    };
    ExplicitErc20MockFactory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides);
    };
    ExplicitErc20MockFactory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ExplicitErc20MockFactory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ExplicitErc20MockFactory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ExplicitErc20MockFactory;
}(ethers_1.ContractFactory));
exports.ExplicitErc20MockFactory = ExplicitErc20MockFactory;
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            },
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_quantity",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
var _bytecode = "0x608060405234801561001057600080fd5b5061064e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806315dacbea14610030575b600080fd5b61004361003e3660046103f6565b610045565b005b61005184848484610057565b50505050565b8015610051576040516370a0823160e01b81526000906001600160a01b038616906370a082319061008c90869060040161047a565b60206040518083038186803b1580156100a457600080fd5b505afa1580156100b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100dc9190610446565b90506100ea858585856101aa565b6040516370a0823160e01b81526000906001600160a01b038716906370a082319061011990879060040161047a565b60206040518083038186803b15801561013157600080fd5b505afa158015610145573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101699190610446565b905061017b828463ffffffff61020216565b81146101a25760405162461bcd60e51b81526004016101999061051c565b60405180910390fd5b505050505050565b610051846323b872dd60e01b8585856040516024016101cb9392919061048e565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261022e565b6000828201838110156102275760405162461bcd60e51b8152600401610199906104e5565b9392505050565b6060610283826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166102c29092919063ffffffff16565b8051909150156102bd57808060200190518101906102a191906103d6565b6102bd5760405162461bcd60e51b81526004016101999061058a565b505050565b60606102d184846000856102d9565b949350505050565b60606102e48561039d565b6103005760405162461bcd60e51b815260040161019990610553565b60006060866001600160a01b0316858760405161031d919061045e565b60006040518083038185875af1925050503d806000811461035a576040519150601f19603f3d011682016040523d82523d6000602084013e61035f565b606091505b509150915081156103735791506102d19050565b8051156103835780518082602001fd5b8360405162461bcd60e51b815260040161019991906104b2565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906102d1575050151592915050565b6000602082840312156103e7578081fd5b81518015158114610227578182fd5b6000806000806080858703121561040b578283fd5b843561041681610600565b9350602085013561042681610600565b9250604085013561043681610600565b9396929550929360600135925050565b600060208284031215610457578081fd5b5051919050565b600082516104708184602087016105d4565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006020825282518060208401526104d18160408501602087016105d4565b601f01601f19169190910160400192915050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252601d908201527f496e76616c696420706f7374207472616e736665722062616c616e6365000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60005b838110156105ef5781810151838201526020016105d7565b838111156100515750506000910152565b6001600160a01b038116811461061557600080fd5b5056fea264697066735822122019ce55f76764c0e184506be2b05b96d160979d0ad22c1a4db4635b3320b7e54564736f6c634300060a0033";
