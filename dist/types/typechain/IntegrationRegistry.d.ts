import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface IntegrationRegistryInterface extends Interface {
    functions: {
        addIntegration: TypedFunctionDescription<{
            encode([_module, _name, _adapter]: [string, string, string]): string;
        }>;
        batchAddIntegration: TypedFunctionDescription<{
            encode([_modules, _names, _adapters]: [string[], string[], string[]]): string;
        }>;
        batchEditIntegration: TypedFunctionDescription<{
            encode([_modules, _names, _adapters]: [string[], string[], string[]]): string;
        }>;
        controller: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        editIntegration: TypedFunctionDescription<{
            encode([_module, _name, _adapter]: [string, string, string]): string;
        }>;
        getIntegrationAdapter: TypedFunctionDescription<{
            encode([_module, _name]: [string, string]): string;
        }>;
        getIntegrationAdapterWithHash: TypedFunctionDescription<{
            encode([_module, _nameHash]: [string, Arrayish]): string;
        }>;
        isValidIntegration: TypedFunctionDescription<{
            encode([_module, _name]: [string, string]): string;
        }>;
        owner: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        removeIntegration: TypedFunctionDescription<{
            encode([_module, _name]: [string, string]): string;
        }>;
        renounceOwnership: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        transferOwnership: TypedFunctionDescription<{
            encode([newOwner]: [string]): string;
        }>;
    };
    events: {
        IntegrationAdded: TypedEventDescription<{
            encodeTopics([_module, _adapter, _integrationName]: [string | null, string | null, null]): string[];
        }>;
        IntegrationEdited: TypedEventDescription<{
            encodeTopics([_module, _newAdapter, _integrationName]: [string | null, null, null]): string[];
        }>;
        IntegrationRemoved: TypedEventDescription<{
            encodeTopics([_module, _adapter, _integrationName]: [string | null, string | null, null]): string[];
        }>;
        OwnershipTransferred: TypedEventDescription<{
            encodeTopics([previousOwner, newOwner]: [string | null, string | null]): string[];
        }>;
    };
}
export declare class IntegrationRegistry extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IntegrationRegistry;
    attach(addressOrName: string): IntegrationRegistry;
    deployed(): Promise<IntegrationRegistry>;
    on(event: EventFilter | string, listener: Listener): IntegrationRegistry;
    once(event: EventFilter | string, listener: Listener): IntegrationRegistry;
    addListener(eventName: EventFilter | string, listener: Listener): IntegrationRegistry;
    removeAllListeners(eventName: EventFilter | string): IntegrationRegistry;
    removeListener(eventName: any, listener: Listener): IntegrationRegistry;
    interface: IntegrationRegistryInterface;
    functions: {
        addIntegration(_module: string, _name: string, _adapter: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        batchAddIntegration(_modules: string[], _names: string[], _adapters: string[], overrides?: TransactionOverrides): Promise<ContractTransaction>;
        batchEditIntegration(_modules: string[], _names: string[], _adapters: string[], overrides?: TransactionOverrides): Promise<ContractTransaction>;
        controller(): Promise<string>;
        editIntegration(_module: string, _name: string, _adapter: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        getIntegrationAdapter(_module: string, _name: string): Promise<string>;
        getIntegrationAdapterWithHash(_module: string, _nameHash: Arrayish): Promise<string>;
        isValidIntegration(_module: string, _name: string): Promise<boolean>;
        owner(): Promise<string>;
        removeIntegration(_module: string, _name: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        renounceOwnership(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    addIntegration(_module: string, _name: string, _adapter: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    batchAddIntegration(_modules: string[], _names: string[], _adapters: string[], overrides?: TransactionOverrides): Promise<ContractTransaction>;
    batchEditIntegration(_modules: string[], _names: string[], _adapters: string[], overrides?: TransactionOverrides): Promise<ContractTransaction>;
    controller(): Promise<string>;
    editIntegration(_module: string, _name: string, _adapter: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    getIntegrationAdapter(_module: string, _name: string): Promise<string>;
    getIntegrationAdapterWithHash(_module: string, _nameHash: Arrayish): Promise<string>;
    isValidIntegration(_module: string, _name: string): Promise<boolean>;
    owner(): Promise<string>;
    removeIntegration(_module: string, _name: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    renounceOwnership(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        IntegrationAdded(_module: string | null, _adapter: string | null, _integrationName: null): EventFilter;
        IntegrationEdited(_module: string | null, _newAdapter: null, _integrationName: null): EventFilter;
        IntegrationRemoved(_module: string | null, _adapter: string | null, _integrationName: null): EventFilter;
        OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter;
    };
    estimate: {
        addIntegration(_module: string, _name: string, _adapter: string): Promise<BigNumber>;
        batchAddIntegration(_modules: string[], _names: string[], _adapters: string[]): Promise<BigNumber>;
        batchEditIntegration(_modules: string[], _names: string[], _adapters: string[]): Promise<BigNumber>;
        controller(): Promise<BigNumber>;
        editIntegration(_module: string, _name: string, _adapter: string): Promise<BigNumber>;
        getIntegrationAdapter(_module: string, _name: string): Promise<BigNumber>;
        getIntegrationAdapterWithHash(_module: string, _nameHash: Arrayish): Promise<BigNumber>;
        isValidIntegration(_module: string, _name: string): Promise<BigNumber>;
        owner(): Promise<BigNumber>;
        removeIntegration(_module: string, _name: string): Promise<BigNumber>;
        renounceOwnership(): Promise<BigNumber>;
        transferOwnership(newOwner: string): Promise<BigNumber>;
    };
}
export {};
