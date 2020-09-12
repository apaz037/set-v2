import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface Weth9Interface extends Interface {
    functions: {
        name: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        decimals: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        balanceOf: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        symbol: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        allowance: TypedFunctionDescription<{
            encode([,]: [string, string]): string;
        }>;
        deposit: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        withdraw: TypedFunctionDescription<{
            encode([wad]: [BigNumberish]): string;
        }>;
        totalSupply: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        approve: TypedFunctionDescription<{
            encode([guy, wad]: [string, BigNumberish]): string;
        }>;
        transfer: TypedFunctionDescription<{
            encode([dst, wad]: [string, BigNumberish]): string;
        }>;
        transferFrom: TypedFunctionDescription<{
            encode([src, dst, wad]: [string, string, BigNumberish]): string;
        }>;
    };
    events: {
        Approval: TypedEventDescription<{
            encodeTopics([src, guy, wad]: [string | null, string | null, null]): string[];
        }>;
        Transfer: TypedEventDescription<{
            encodeTopics([src, dst, wad]: [string | null, string | null, null]): string[];
        }>;
        Deposit: TypedEventDescription<{
            encodeTopics([dst, wad]: [string | null, null]): string[];
        }>;
        Withdrawal: TypedEventDescription<{
            encodeTopics([src, wad]: [string | null, null]): string[];
        }>;
    };
}
export declare class Weth9 extends Contract {
    connect(signerOrProvider: Signer | Provider | string): Weth9;
    attach(addressOrName: string): Weth9;
    deployed(): Promise<Weth9>;
    on(event: EventFilter | string, listener: Listener): Weth9;
    once(event: EventFilter | string, listener: Listener): Weth9;
    addListener(eventName: EventFilter | string, listener: Listener): Weth9;
    removeAllListeners(eventName: EventFilter | string): Weth9;
    removeListener(eventName: any, listener: Listener): Weth9;
    interface: Weth9Interface;
    functions: {
        name(): Promise<string>;
        decimals(): Promise<number>;
        balanceOf(arg0: string): Promise<BigNumber>;
        symbol(): Promise<string>;
        allowance(arg0: string, arg1: string): Promise<BigNumber>;
        deposit(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        withdraw(wad: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        totalSupply(): Promise<BigNumber>;
        approve(guy: string, wad: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        transfer(dst: string, wad: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    name(): Promise<string>;
    decimals(): Promise<number>;
    balanceOf(arg0: string): Promise<BigNumber>;
    symbol(): Promise<string>;
    allowance(arg0: string, arg1: string): Promise<BigNumber>;
    deposit(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    withdraw(wad: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    totalSupply(): Promise<BigNumber>;
    approve(guy: string, wad: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    transfer(dst: string, wad: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        Approval(src: string | null, guy: string | null, wad: null): EventFilter;
        Transfer(src: string | null, dst: string | null, wad: null): EventFilter;
        Deposit(dst: string | null, wad: null): EventFilter;
        Withdrawal(src: string | null, wad: null): EventFilter;
    };
    estimate: {
        name(): Promise<BigNumber>;
        decimals(): Promise<BigNumber>;
        balanceOf(arg0: string): Promise<BigNumber>;
        symbol(): Promise<BigNumber>;
        allowance(arg0: string, arg1: string): Promise<BigNumber>;
        deposit(): Promise<BigNumber>;
        withdraw(wad: BigNumberish): Promise<BigNumber>;
        totalSupply(): Promise<BigNumber>;
        approve(guy: string, wad: BigNumberish): Promise<BigNumber>;
        transfer(dst: string, wad: BigNumberish): Promise<BigNumber>;
        transferFrom(src: string, dst: string, wad: BigNumberish): Promise<BigNumber>;
    };
}
export {};
