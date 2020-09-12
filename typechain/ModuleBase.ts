/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ModuleBaseInterface extends Interface {
  functions: {
    controller: TypedFunctionDescription<{ encode([]: []): string }>;

    removeModule: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export declare class ModuleBase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ModuleBase;
  attach(addressOrName: string): ModuleBase;
  deployed(): Promise<ModuleBase>;

  on(event: EventFilter | string, listener: Listener): ModuleBase;
  once(event: EventFilter | string, listener: Listener): ModuleBase;
  addListener(eventName: EventFilter | string, listener: Listener): ModuleBase;
  removeAllListeners(eventName: EventFilter | string): ModuleBase;
  removeListener(eventName: any, listener: Listener): ModuleBase;

  interface: ModuleBaseInterface;

  functions: {
    controller(): Promise<string>;

    removeModule(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  controller(): Promise<string>;

  removeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    controller(): Promise<BigNumber>;

    removeModule(): Promise<BigNumber>;
  };
}
