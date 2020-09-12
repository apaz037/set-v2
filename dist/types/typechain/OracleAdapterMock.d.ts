import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface OracleAdapterMockInterface extends Interface {
    functions: {
        asset: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        dummyPrice: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getPrice: TypedFunctionDescription<{
            encode([_assetOne, _assetTwo]: [string, string]): string;
        }>;
    };
    events: {};
}
export declare class OracleAdapterMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): OracleAdapterMock;
    attach(addressOrName: string): OracleAdapterMock;
    deployed(): Promise<OracleAdapterMock>;
    on(event: EventFilter | string, listener: Listener): OracleAdapterMock;
    once(event: EventFilter | string, listener: Listener): OracleAdapterMock;
    addListener(eventName: EventFilter | string, listener: Listener): OracleAdapterMock;
    removeAllListeners(eventName: EventFilter | string): OracleAdapterMock;
    removeListener(eventName: any, listener: Listener): OracleAdapterMock;
    interface: OracleAdapterMockInterface;
    functions: {
        asset(): Promise<string>;
        dummyPrice(): Promise<BigNumber>;
        getPrice(_assetOne: string, _assetTwo: string): Promise<{
            0: boolean;
            1: BigNumber;
        }>;
    };
    asset(): Promise<string>;
    dummyPrice(): Promise<BigNumber>;
    getPrice(_assetOne: string, _assetTwo: string): Promise<{
        0: boolean;
        1: BigNumber;
    }>;
    filters: {};
    estimate: {
        asset(): Promise<BigNumber>;
        dummyPrice(): Promise<BigNumber>;
        getPrice(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
    };
}
export {};
