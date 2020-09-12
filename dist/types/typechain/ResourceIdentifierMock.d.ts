import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface ResourceIdentifierMockInterface extends Interface {
    functions: {
        testGetIntegrationRegistry: TypedFunctionDescription<{
            encode([_controller]: [string]): string;
        }>;
        testGetPriceOracle: TypedFunctionDescription<{
            encode([_controller]: [string]): string;
        }>;
        testGetSetValuer: TypedFunctionDescription<{
            encode([_controller]: [string]): string;
        }>;
    };
    events: {};
}
export declare class ResourceIdentifierMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ResourceIdentifierMock;
    attach(addressOrName: string): ResourceIdentifierMock;
    deployed(): Promise<ResourceIdentifierMock>;
    on(event: EventFilter | string, listener: Listener): ResourceIdentifierMock;
    once(event: EventFilter | string, listener: Listener): ResourceIdentifierMock;
    addListener(eventName: EventFilter | string, listener: Listener): ResourceIdentifierMock;
    removeAllListeners(eventName: EventFilter | string): ResourceIdentifierMock;
    removeListener(eventName: any, listener: Listener): ResourceIdentifierMock;
    interface: ResourceIdentifierMockInterface;
    functions: {
        testGetIntegrationRegistry(_controller: string): Promise<string>;
        testGetPriceOracle(_controller: string): Promise<string>;
        testGetSetValuer(_controller: string): Promise<string>;
    };
    testGetIntegrationRegistry(_controller: string): Promise<string>;
    testGetPriceOracle(_controller: string): Promise<string>;
    testGetSetValuer(_controller: string): Promise<string>;
    filters: {};
    estimate: {
        testGetIntegrationRegistry(_controller: string): Promise<BigNumber>;
        testGetPriceOracle(_controller: string): Promise<BigNumber>;
        testGetSetValuer(_controller: string): Promise<BigNumber>;
    };
}
export {};
