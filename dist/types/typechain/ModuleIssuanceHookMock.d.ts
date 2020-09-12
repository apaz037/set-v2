import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface ModuleIssuanceHookMockInterface extends Interface {
    functions: {
        initialize: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        issueHook: TypedFunctionDescription<{
            encode([_setToken, _setTokenQuantity, _component]: [string, BigNumberish, string]): string;
        }>;
        redeemHook: TypedFunctionDescription<{
            encode([_setToken, _setTokenQuantity, _component]: [string, BigNumberish, string]): string;
        }>;
    };
    events: {};
}
export declare class ModuleIssuanceHookMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ModuleIssuanceHookMock;
    attach(addressOrName: string): ModuleIssuanceHookMock;
    deployed(): Promise<ModuleIssuanceHookMock>;
    on(event: EventFilter | string, listener: Listener): ModuleIssuanceHookMock;
    once(event: EventFilter | string, listener: Listener): ModuleIssuanceHookMock;
    addListener(eventName: EventFilter | string, listener: Listener): ModuleIssuanceHookMock;
    removeAllListeners(eventName: EventFilter | string): ModuleIssuanceHookMock;
    removeListener(eventName: any, listener: Listener): ModuleIssuanceHookMock;
    interface: ModuleIssuanceHookMockInterface;
    functions: {
        initialize(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        issueHook(_setToken: string, _setTokenQuantity: BigNumberish, _component: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        redeemHook(_setToken: string, _setTokenQuantity: BigNumberish, _component: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    initialize(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    issueHook(_setToken: string, _setTokenQuantity: BigNumberish, _component: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    redeemHook(_setToken: string, _setTokenQuantity: BigNumberish, _component: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {};
    estimate: {
        initialize(_setToken: string): Promise<BigNumber>;
        issueHook(_setToken: string, _setTokenQuantity: BigNumberish, _component: string): Promise<BigNumber>;
        redeemHook(_setToken: string, _setTokenQuantity: BigNumberish, _component: string): Promise<BigNumber>;
    };
}
export {};
