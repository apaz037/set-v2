import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface ExplicitErc20MockInterface extends Interface {
    functions: {
        transferFrom: TypedFunctionDescription<{
            encode([_token, _from, _to, _quantity]: [string, string, string, BigNumberish]): string;
        }>;
    };
    events: {};
}
export declare class ExplicitErc20Mock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ExplicitErc20Mock;
    attach(addressOrName: string): ExplicitErc20Mock;
    deployed(): Promise<ExplicitErc20Mock>;
    on(event: EventFilter | string, listener: Listener): ExplicitErc20Mock;
    once(event: EventFilter | string, listener: Listener): ExplicitErc20Mock;
    addListener(eventName: EventFilter | string, listener: Listener): ExplicitErc20Mock;
    removeAllListeners(eventName: EventFilter | string): ExplicitErc20Mock;
    removeListener(eventName: any, listener: Listener): ExplicitErc20Mock;
    interface: ExplicitErc20MockInterface;
    functions: {
        transferFrom(_token: string, _from: string, _to: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    transferFrom(_token: string, _from: string, _to: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {};
    estimate: {
        transferFrom(_token: string, _from: string, _to: string, _quantity: BigNumberish): Promise<BigNumber>;
    };
}
export {};
