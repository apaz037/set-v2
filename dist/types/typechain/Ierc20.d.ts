import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface Ierc20Interface extends Interface {
    functions: {
        allowance: TypedFunctionDescription<{
            encode([owner, spender]: [string, string]): string;
        }>;
        approve: TypedFunctionDescription<{
            encode([spender, amount]: [string, BigNumberish]): string;
        }>;
        balanceOf: TypedFunctionDescription<{
            encode([account]: [string]): string;
        }>;
        totalSupply: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        transfer: TypedFunctionDescription<{
            encode([recipient, amount]: [string, BigNumberish]): string;
        }>;
        transferFrom: TypedFunctionDescription<{
            encode([sender, recipient, amount]: [string, string, BigNumberish]): string;
        }>;
    };
    events: {
        Approval: TypedEventDescription<{
            encodeTopics([owner, spender, value]: [string | null, string | null, null]): string[];
        }>;
        Transfer: TypedEventDescription<{
            encodeTopics([from, to, value]: [string | null, string | null, null]): string[];
        }>;
    };
}
export declare class Ierc20 extends Contract {
    connect(signerOrProvider: Signer | Provider | string): Ierc20;
    attach(addressOrName: string): Ierc20;
    deployed(): Promise<Ierc20>;
    on(event: EventFilter | string, listener: Listener): Ierc20;
    once(event: EventFilter | string, listener: Listener): Ierc20;
    addListener(eventName: EventFilter | string, listener: Listener): Ierc20;
    removeAllListeners(eventName: EventFilter | string): Ierc20;
    removeListener(eventName: any, listener: Listener): Ierc20;
    interface: Ierc20Interface;
    functions: {
        allowance(owner: string, spender: string): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        balanceOf(account: string): Promise<BigNumber>;
        totalSupply(): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    allowance(owner: string, spender: string): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    balanceOf(account: string): Promise<BigNumber>;
    totalSupply(): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        Approval(owner: string | null, spender: string | null, value: null): EventFilter;
        Transfer(from: string | null, to: string | null, value: null): EventFilter;
    };
    estimate: {
        allowance(owner: string, spender: string): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish): Promise<BigNumber>;
        balanceOf(account: string): Promise<BigNumber>;
        totalSupply(): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish): Promise<BigNumber>;
    };
}
export {};
