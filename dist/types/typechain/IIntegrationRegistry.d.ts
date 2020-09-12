import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface IIntegrationRegistryInterface extends Interface {
    functions: {
        addIntegration: TypedFunctionDescription<{
            encode([_module, _id, _wrapper]: [string, string, string]): string;
        }>;
        getIntegrationAdapter: TypedFunctionDescription<{
            encode([_module, _id]: [string, string]): string;
        }>;
        getIntegrationAdapterWithHash: TypedFunctionDescription<{
            encode([_module, _id]: [string, Arrayish]): string;
        }>;
        isValidIntegration: TypedFunctionDescription<{
            encode([_module, _id]: [string, string]): string;
        }>;
    };
    events: {};
}
export declare class IIntegrationRegistry extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IIntegrationRegistry;
    attach(addressOrName: string): IIntegrationRegistry;
    deployed(): Promise<IIntegrationRegistry>;
    on(event: EventFilter | string, listener: Listener): IIntegrationRegistry;
    once(event: EventFilter | string, listener: Listener): IIntegrationRegistry;
    addListener(eventName: EventFilter | string, listener: Listener): IIntegrationRegistry;
    removeAllListeners(eventName: EventFilter | string): IIntegrationRegistry;
    removeListener(eventName: any, listener: Listener): IIntegrationRegistry;
    interface: IIntegrationRegistryInterface;
    functions: {
        addIntegration(_module: string, _id: string, _wrapper: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        getIntegrationAdapter(_module: string, _id: string): Promise<string>;
        getIntegrationAdapterWithHash(_module: string, _id: Arrayish): Promise<string>;
        isValidIntegration(_module: string, _id: string): Promise<boolean>;
    };
    addIntegration(_module: string, _id: string, _wrapper: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    getIntegrationAdapter(_module: string, _id: string): Promise<string>;
    getIntegrationAdapterWithHash(_module: string, _id: Arrayish): Promise<string>;
    isValidIntegration(_module: string, _id: string): Promise<boolean>;
    filters: {};
    estimate: {
        addIntegration(_module: string, _id: string, _wrapper: string): Promise<BigNumber>;
        getIntegrationAdapter(_module: string, _id: string): Promise<BigNumber>;
        getIntegrationAdapterWithHash(_module: string, _id: Arrayish): Promise<BigNumber>;
        isValidIntegration(_module: string, _id: string): Promise<BigNumber>;
    };
}
export {};
