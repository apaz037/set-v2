/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { AddressArrayUtilsMock } from "./AddressArrayUtilsMock";

export class AddressArrayUtilsMockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<AddressArrayUtilsMock> {
    return super.deploy(overrides) as Promise<AddressArrayUtilsMock>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): AddressArrayUtilsMock {
    return super.attach(address) as AddressArrayUtilsMock;
  }
  connect(signer: Signer): AddressArrayUtilsMockFactory {
    return super.connect(signer) as AddressArrayUtilsMockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressArrayUtilsMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AddressArrayUtilsMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "A",
        type: "address[]"
      },
      {
        internalType: "address",
        name: "a",
        type: "address"
      }
    ],
    name: "testContains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "A",
        type: "address[]"
      }
    ],
    name: "testHasDuplicate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "A",
        type: "address[]"
      },
      {
        internalType: "address",
        name: "a",
        type: "address"
      }
    ],
    name: "testIndexOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "A",
        type: "address[]"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "testPop",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "A",
        type: "address[]"
      },
      {
        internalType: "address",
        name: "a",
        type: "address"
      }
    ],
    name: "testRemove",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106ed806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063115cde931461005c5780631bdca2ea1461008557806336acdf1c1461009857806341414def146100b9578063e1415524146100d9575b600080fd5b61006f61006a3660046104c7565b6100fa565b60405161007c9190610612565b60405180910390f35b61006f610093366004610502565b61010d565b6100ab6100a6366004610502565b610128565b60405161007c9291906106a7565b6100cc6100c7366004610502565b610147565b60405161007c91906105d5565b6100ec6100e736600461054f565b610159565b60405161007c9291906105e8565b60006101058261016d565b90505b919050565b600061011f838363ffffffff61022516565b90505b92915050565b60008061013b848463ffffffff61023b16565b915091505b9250929050565b606061011f838363ffffffff61029e16565b6060600061013b848463ffffffff6102e616565b6000808251116101985760405162461bcd60e51b815260040161018f90610683565b60405180910390fd5b60005b600183510381101561021c5760008382815181106101b557fe5b6020026020010151905060008260010190505b8451811015610212578481815181106101dd57fe5b60200260200101516001600160a01b0316826001600160a01b0316141561020a5760019350505050610108565b6001016101c8565b505060010161019b565b50600092915050565b600080610232848461023b565b95945050505050565b81516000908190815b8181101561028e57846001600160a01b031686828151811061026257fe5b60200260200101516001600160a01b03161415610286579250600191506101409050565b600101610244565b5060001995600095509350505050565b60606000806102ad858561023b565b91509150806102ce5760405162461bcd60e51b815260040161018f9061061d565b60606102da86846102e6565b50935061012292505050565b815160609060009080841061030d5760405162461bcd60e51b815260040161018f9061064c565b60606001820367ffffffffffffffff8111801561032957600080fd5b50604051908082528060200260200182016040528015610353578160200160208202803683370190505b50905060005b858110156103a15786818151811061036d57fe5b602002602001015182828151811061038157fe5b6001600160a01b0390921660209283029190910190910152600101610359565b50600185015b828110156103f2578681815181106103bb57fe5b60200260200101518260018303815181106103d257fe5b6001600160a01b03909216602092830291909101909101526001016103a7565b508086868151811061040057fe5b60200260200101519350935050509250929050565b80356001600160a01b038116811461012257600080fd5b600082601f83011261043c578081fd5b813567ffffffffffffffff80821115610453578283fd5b602080830260405182828201018181108582111715610470578687fd5b60405284815294508185019250858201818701830188101561049157600080fd5b600091505b848210156104bc576104a88882610415565b845292820192600191909101908201610496565b505050505092915050565b6000602082840312156104d8578081fd5b813567ffffffffffffffff8111156104ee578182fd5b6104fa8482850161042c565b949350505050565b60008060408385031215610514578081fd5b823567ffffffffffffffff81111561052a578182fd5b6105368582860161042c565b9250506105468460208501610415565b90509250929050565b60008060408385031215610561578182fd5b823567ffffffffffffffff811115610577578283fd5b6105838582860161042c565b95602094909401359450505050565b6000815180845260208085019450808401835b838110156105ca5781516001600160a01b0316875295820195908201906001016105a5565b509495945050505050565b60006020825261011f6020830184610592565b6000604082526105fb6040830185610592565b905060018060a01b03831660208301529392505050565b901515815260200190565b60208082526015908201527420b2323932b9b9903737ba1034b71030b93930bc9760591b604082015260600190565b60208082526018908201527f496e646578206d757374206265203c2041206c656e6774680000000000000000604082015260600190565b6020808252600a90820152694120697320656d70747960b01b604082015260600190565b918252151560208201526040019056fea26469706673582212205d62b63e51569dbcef9872894ebd0f1190fbd57bfd0f69775bb494f0d23de36a64736f6c634300060a0033";
