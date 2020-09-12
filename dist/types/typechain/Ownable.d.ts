import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface OwnableInterface extends Interface {
    functions: {
        owner: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        renounceOwnership: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        transferOwnership: TypedFunctionDescription<{
            encode([newOwner]: [string]): string;
        }>;
    };
    events: {
        OwnershipTransferred: TypedEventDescription<{
            encodeTopics([previousOwner, newOwner]: [string | null, string | null]): string[];
        }>;
    };
}
export declare class Ownable extends Contract {
    connect(signerOrProvider: Signer | Provider | string): Ownable;
    attach(addressOrName: string): Ownable;
    deployed(): Promise<Ownable>;
    on(event: EventFilter | string, listener: Listener): Ownable;
    once(event: EventFilter | string, listener: Listener): Ownable;
    addListener(eventName: EventFilter | string, listener: Listener): Ownable;
    removeAllListeners(eventName: EventFilter | string): Ownable;
    removeListener(eventName: any, listener: Listener): Ownable;
    interface: OwnableInterface;
    functions: {
        owner(): Promise<string>;
        renounceOwnership(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    owner(): Promise<string>;
    renounceOwnership(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter;
    };
    estimate: {
        owner(): Promise<BigNumber>;
        renounceOwnership(): Promise<BigNumber>;
        transferOwnership(newOwner: string): Promise<BigNumber>;
    };
}
export {};
