import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface SetValuerInterface extends Interface {
    functions: {
        calculateSetTokenValuation: TypedFunctionDescription<{
            encode([_setToken, _quoteAsset]: [string, string]): string;
        }>;
        controller: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
    };
    events: {};
}
export declare class SetValuer extends Contract {
    connect(signerOrProvider: Signer | Provider | string): SetValuer;
    attach(addressOrName: string): SetValuer;
    deployed(): Promise<SetValuer>;
    on(event: EventFilter | string, listener: Listener): SetValuer;
    once(event: EventFilter | string, listener: Listener): SetValuer;
    addListener(eventName: EventFilter | string, listener: Listener): SetValuer;
    removeAllListeners(eventName: EventFilter | string): SetValuer;
    removeListener(eventName: any, listener: Listener): SetValuer;
    interface: SetValuerInterface;
    functions: {
        calculateSetTokenValuation(_setToken: string, _quoteAsset: string): Promise<BigNumber>;
        controller(): Promise<string>;
    };
    calculateSetTokenValuation(_setToken: string, _quoteAsset: string): Promise<BigNumber>;
    controller(): Promise<string>;
    filters: {};
    estimate: {
        calculateSetTokenValuation(_setToken: string, _quoteAsset: string): Promise<BigNumber>;
        controller(): Promise<BigNumber>;
    };
}
export {};
