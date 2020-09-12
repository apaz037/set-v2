import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface IControllerInterface extends Interface {
    functions: {
        addSet: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        feeRecipient: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getModuleFee: TypedFunctionDescription<{
            encode([_module, _feeType]: [string, BigNumberish]): string;
        }>;
        isModule: TypedFunctionDescription<{
            encode([_module]: [string]): string;
        }>;
        isSet: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        isSystemContract: TypedFunctionDescription<{
            encode([_contractAddress]: [string]): string;
        }>;
        resourceId: TypedFunctionDescription<{
            encode([_id]: [BigNumberish]): string;
        }>;
    };
    events: {};
}
export declare class IController extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IController;
    attach(addressOrName: string): IController;
    deployed(): Promise<IController>;
    on(event: EventFilter | string, listener: Listener): IController;
    once(event: EventFilter | string, listener: Listener): IController;
    addListener(eventName: EventFilter | string, listener: Listener): IController;
    removeAllListeners(eventName: EventFilter | string): IController;
    removeListener(eventName: any, listener: Listener): IController;
    interface: IControllerInterface;
    functions: {
        addSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        feeRecipient(): Promise<string>;
        getModuleFee(_module: string, _feeType: BigNumberish): Promise<BigNumber>;
        isModule(_module: string): Promise<boolean>;
        isSet(_setToken: string): Promise<boolean>;
        isSystemContract(_contractAddress: string): Promise<boolean>;
        resourceId(_id: BigNumberish): Promise<string>;
    };
    addSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    feeRecipient(): Promise<string>;
    getModuleFee(_module: string, _feeType: BigNumberish): Promise<BigNumber>;
    isModule(_module: string): Promise<boolean>;
    isSet(_setToken: string): Promise<boolean>;
    isSystemContract(_contractAddress: string): Promise<boolean>;
    resourceId(_id: BigNumberish): Promise<string>;
    filters: {};
    estimate: {
        addSet(_setToken: string): Promise<BigNumber>;
        feeRecipient(): Promise<BigNumber>;
        getModuleFee(_module: string, _feeType: BigNumberish): Promise<BigNumber>;
        isModule(_module: string): Promise<BigNumber>;
        isSet(_setToken: string): Promise<BigNumber>;
        isSystemContract(_contractAddress: string): Promise<BigNumber>;
        resourceId(_id: BigNumberish): Promise<BigNumber>;
    };
}
export {};
