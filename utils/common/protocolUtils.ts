import { JsonRpcProvider, Web3Provider } from "ethers/providers";

import { BigNumber } from "ethers/utils";
import { ethers, constants } from "ethers";

import { EMPTY_BYTES } from "../constants";
import { Address, Position } from "../types";

const { AddressZero } = constants;

export class ProtocolUtils {
  public _provider: Web3Provider | JsonRpcProvider;

  constructor(_provider: Web3Provider | JsonRpcProvider) {
    this._provider = _provider;
  }

  public async getCreatedSetTokenAddress (txnHash: string | undefined): Promise<string> {
    if (!txnHash) {
      throw new Error("Invalid transaction hash");
    }

    const abi = ['event SetTokenCreated(address indexed _setToken, address _manager, string _name, string _symbol)'];
    const iface = new ethers.utils.Interface(abi);

    const topic = ethers.utils.id('SetTokenCreated(address,address,string,string)');
    const logs = await this._provider.getLogs({
      fromBlock: "latest",
      toBlock: "latest",
      topics: [topic],
    });

    const parsed = iface.parseLog(logs[logs.length - 1]);
    return parsed.values._setToken;
  }

  public getDefaultPosition(component: Address, unit: BigNumber): Position {
    return {
      component,
      module: AddressZero,
      unit,
      positionState: 0,
      data: EMPTY_BYTES,
    };
  }

  public getExternalPosition(component: Address, module: Address, unit: BigNumber, data: string): Position {
    return {
      component,
      module,
      unit,
      positionState: 1,
      data,
    };
  }
}